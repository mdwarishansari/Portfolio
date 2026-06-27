import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, RoundedBox, Edges, Text } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { personal } from "@/data/personal";

const PLUM = "#8052ff";
const AMBER = "#ffb829";
const LICHEN = "#15846e";
const BONE = "#ffffff";

/** A holographic code/editor window floating at the centre. */
function CodeWindow() {
  const snippet = personal.hero.codeSnippet;
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= snippet.length) {
      // Loop: Wait 6 seconds and restart typing
      const resetTimeout = setTimeout(() => {
        setTypedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 6000);
      return () => clearTimeout(resetTimeout);
    }

    const currentLine = snippet[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
      const typeTimeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
        const linesCopy = [...snippet.slice(0, currentLineIndex)];
        linesCopy.push(currentLine.slice(0, currentCharIndex + 1));
        setTypedLines(linesCopy);
      }, 35);
      return () => clearTimeout(typeTimeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 250);
      return () => clearTimeout(lineTimeout);
    }
  }, [currentLineIndex, currentCharIndex, snippet]);

  return (
    <group>
      <RoundedBox args={[2.8, 3.0, 0.08]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#08080c"
          transparent
          opacity={0.92}
          metalness={0.3}
          roughness={0.5}
        />
        <Edges color={PLUM} threshold={15} />
      </RoundedBox>

      {/* title bar dots */}
      {[-1.1, -0.92, -0.74].map((x, i) => (
        <mesh key={i} position={[x, 1.28, 0.07]}>
          <circleGeometry args={[0.05, 16]} />
          <meshBasicMaterial color={[AMBER, LICHEN, PLUM][i]} />
        </mesh>
      ))}

      {/* code typing animation */}
      <Suspense fallback={null}>
        {typedLines.map((line, i) => {
          const isCurrentLine = i === currentLineIndex;
          const displayText = line + (isCurrentLine && blink ? "█" : "");
          // Highlight different elements with colors matching theme
          let textColor = BONE;
          if (line.includes("const ") || line.includes("developer")) {
            textColor = PLUM;
          } else if (line.includes("name:") || line.includes("role:") || line.includes("skills:") || line.includes("passion:") || line.includes("focus:") || line.includes("available:")) {
            textColor = LICHEN;
          } else if (line.includes("true") || line.includes("'")) {
            textColor = AMBER;
          }

          return (
            <Text
              key={i}
              position={[-1.25, 0.95 - i * 0.22, 0.07]}
              color={textColor}
              fontSize={0.095}
              anchorX="left"
              anchorY="middle"
              maxWidth={2.4}
            >
              {displayText}
            </Text>
          );
        })}
      </Suspense>
    </group>
  );
}

/** An orbiting tech node connected to the centre — a network/topology graph. */
function TechNode({
  position,
  color,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  geometry: "ico" | "oct" | "box" | "tetra";
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.4;
      ref.current.rotation.y += dt * 0.5;
      const target = hovered ? 1.5 : 1;
      ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
    }
  });

  const geo =
    geometry === "ico" ? (
      <icosahedronGeometry args={[0.34, 0]} />
    ) : geometry === "oct" ? (
      <octahedronGeometry args={[0.36, 0]} />
    ) : geometry === "box" ? (
      <boxGeometry args={[0.5, 0.5, 0.5]} />
    ) : (
      <tetrahedronGeometry args={[0.42, 0]} />
    );

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        {geo}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.1 : 0.45}
          metalness={0.4}
          roughness={0.25}
          transparent
          opacity={0.9}
        />
        <Edges color={BONE} />
      </mesh>
    </Float>
  );
}

function Connections({ nodes }: { nodes: [number, number, number][] }) {
  return (
    <>
      {nodes.map((n, i) => (
        <Line
          key={i}
          points={[
            [0, 0, 0],
            n,
          ]}
          color={PLUM}
          lineWidth={0.7}
          transparent
          opacity={0.35}
          dashed
          dashScale={4}
        />
      ))}
    </>
  );
}

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      const r = 5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color={PLUM} size={0.045} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

/** Rig that tilts the whole scene toward the pointer for interactivity. */
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        pointer.x * 0.5,
        0.05,
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -pointer.y * 0.35,
        0.05,
      );
    }
  });
  return <group ref={ref}>{children}</group>;
}

export function HeroScene() {
  const nodes: {
    pos: [number, number, number];
    color: string;
    geo: "ico" | "oct" | "box" | "tetra";
  }[] = [
    { pos: [2.6, 1.4, 0.6], color: PLUM, geo: "ico" }, // React atom
    { pos: [-2.7, 1.0, -0.4], color: LICHEN, geo: "oct" }, // database
    { pos: [2.4, -1.6, -0.6], color: AMBER, geo: "box" }, // docker/server
    { pos: [-2.5, -1.4, 0.5], color: BONE, geo: "tetra" }, // cloud/api
    { pos: [0, 2.4, -1], color: AMBER, geo: "oct" }, // git node
    { pos: [0, -2.5, 0.8], color: LICHEN, geo: "ico" }, // node
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={40} color={PLUM} />
      <pointLight position={[-5, -3, 4]} intensity={25} color={AMBER} />
      <directionalLight position={[0, 0, 5]} intensity={1.2} />

      <Rig>
        <ParticleCloud />
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
          <CodeWindow />
        </Float>
        <Connections nodes={nodes.map((n) => n.pos)} />
        {nodes.map((n, i) => (
          <TechNode key={i} position={n.pos} color={n.color} geometry={n.geo} />
        ))}
      </Rig>
    </Canvas>
  );
}
