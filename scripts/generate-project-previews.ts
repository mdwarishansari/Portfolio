import { chromium } from "playwright";
import { projects } from "../src/data/projects";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "../public/project-previews");

async function generatePreviews() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Launching Chromium browser...");
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
  const context = await browser.newContext({
    viewport: { width: 1600, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const project of projects) {
    console.log(`Capturing live preview for ${project.title} (${project.liveUrl})...`);
    try {
      const page = await context.newPage();
      
      // Navigate to live URL and wait for network activity to settle
      await page.goto(project.liveUrl, { 
        waitUntil: "networkidle", 
        timeout: 60000 
      });
      
      // Wait another 2000ms as instructed
      await page.waitForTimeout(2000);
      
      // Capture as PNG buffer first
      const pngBuffer = await page.screenshot({ type: "png" });
      
      // Convert to WebP using browser canvas API
      const webpDataUrl = await page.evaluate(async (pngBase64) => {
        const img = new Image();
        img.src = "data:image/png;base64," + pngBase64;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Could not get canvas context");
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL("image/webp", 0.85);
      }, pngBuffer.toString("base64"));
      
      const base64Data = webpDataUrl.replace(/^data:image\/webp;base64,/, "");
      const outputPath = path.join(OUTPUT_DIR, `${project.slug}.webp`);
      fs.writeFileSync(outputPath, Buffer.from(base64Data, "base64"));
      
      console.log(`✅ Saved optimized WebP preview to: ${outputPath}`);
      await page.close();
    } catch (error) {
      console.error(`❌ Failed to capture preview for ${project.title}:`, error);
    }
  }

  // Generate a fallback placeholder.webp
  try {
    const page = await context.newPage();
    await page.setContent(`
      <!doctype html>
      <html>
        <head>
          <style>
            body {
              background-color: #08080c;
              color: #ffffff;
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              border: 1px solid rgba(255, 255, 255, 0.15);
            }
            .glow {
              color: #8052ff;
              text-shadow: 0 0 10px rgba(128, 82, 255, 0.4);
            }
          </style>
        </head>
        <body>
          <h1 class="glow">Live Preview Unavailable</h1>
          <p style="color: #9a9a9a; font-size: 14px;">Visit live demo to view</p>
        </body>
      </html>
    `);
    
    const pngBuffer = await page.screenshot({ type: "png" });
    const webpDataUrl = await page.evaluate(async (pngBase64) => {
      const img = new Image();
      img.src = "data:image/png;base64," + pngBase64;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get canvas context");
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL("image/webp", 0.85);
    }, pngBuffer.toString("base64"));
    
    const base64Data = webpDataUrl.replace(/^data:image\/webp;base64,/, "");
    const placeholderPath = path.join(OUTPUT_DIR, "placeholder.webp");
    fs.writeFileSync(placeholderPath, Buffer.from(base64Data, "base64"));
    
    console.log(`✅ Generated WebP default fallback at: ${placeholderPath}`);
    await page.close();
  } catch (error) {
    console.error("❌ Failed to generate placeholder.webp:", error);
  }

  await browser.close();
  console.log("Previews generation complete.");
}

generatePreviews().catch((err) => {
  console.error("Unhandled error in previews generation:", err);
  process.exit(1);
});
