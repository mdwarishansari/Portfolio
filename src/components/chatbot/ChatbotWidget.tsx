"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  User,
  ExternalLink,
  Check,
  Copy,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about Warish's background",
  "What are his key skills & tech stack?",
  "Show me his top AI & Web projects",
  "How can I contact Warish?",
];

/** Component to render code blocks with copy-to-clipboard button */
function CodeBlock({ children, className }: { children: any; className?: string }) {
  const [copied, setCopied] = useState(false);
  const codeText = String(children).replace(/\n$/, "");
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-2.5 rounded-xl border border-white/10 bg-black/80 overflow-hidden font-mono text-xs text-purple-200">
      <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/10 text-[11px] text-zinc-400">
        <span>{language || "code"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 hover:text-white transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-3 overflow-x-auto leading-relaxed">
        <code>{codeText}</code>
      </pre>
    </div>
  );
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content:
        "Hi! I'm **Warish's AI Assistant** 🤖. Ask me anything about Mohammad Warish Ansari's experience, projects, skills, or certifications!\n\nQuick actions:\n- [Explore Projects](#projects)\n- [View Tech Stack](#skills)\n- [Contact Email](mailto:warishansari.official@gmail.com)",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "model",
            content: data.reply,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "model",
            content:
              data.error || "Sorry, I couldn't process that. Please try again.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          content: "Network connection error. Please check your connection and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "model",
        content:
          "Chat reset! Ask me anything about Mohammad Warish Ansari's experience or skills.",
      },
    ]);
  };

  const handleAnchorClick = (anchor: string) => {
    const targetId = anchor.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Widget Launcher Button */}
      <div className="fixed bottom-6 right-6 z-[99999] pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-2xl transition-all border border-purple-400/40 glow-plum focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
          aria-label="Toggle AI Assistant"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="font-semibold text-sm tracking-wide hidden sm:inline">
            Ask Warish AI
          </span>
          <Bot className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-22 right-4 sm:right-6 z-[99999] w-[calc(100vw-2rem)] sm:w-[440px] h-[600px] max-h-[82vh] flex flex-col rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden text-white pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4.5 py-4 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                    Warish AI Assistant
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">Powered by Gemini 2.5</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={clearChat}
                  title="Clear Chat"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full shrink-0 shadow-md ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-purple-400 border border-white/10"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-tr-none shadow-lg"
                        : "bg-zinc-900/90 border border-white/10 text-zinc-100 rounded-tl-none shadow-md"
                    }`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        // Bold text styling
                        strong: ({ children }) => (
                          <strong className="font-semibold text-purple-300">
                            {children}
                          </strong>
                        ),
                        // Italic text styling
                        em: ({ children }) => (
                          <em className="italic text-purple-200/90">{children}</em>
                        ),
                        // Code blocks & inline code
                        code: ({ node, inline, className, children, ...props }: any) => {
                          if (inline) {
                            return (
                              <code
                                className="px-1.5 py-0.5 rounded-md bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono text-[0.82em]"
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          }
                          return <CodeBlock className={className}>{children}</CodeBlock>;
                        },
                        // Custom Link / Button Renderer
                        a: ({ href, children }) => {
                          const isAnchor = href?.startsWith("#");
                          if (isAnchor) {
                            return (
                              <button
                                onClick={() => handleAnchorClick(href!)}
                                className="inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-600/60 transition-all text-xs font-medium cursor-pointer"
                              >
                                <span>{children}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                              </button>
                            );
                          }
                          return (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-purple-600/30 border border-purple-400/30 text-purple-300 hover:text-white transition-all underline decoration-purple-400/50 text-xs"
                            >
                              <span>{children}</span>
                              <ExternalLink className="w-3 h-3 text-purple-400" />
                            </a>
                          );
                        },
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-5 space-y-1 my-2 text-zinc-200">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-5 space-y-1 my-2 text-zinc-200">
                            {children}
                          </ol>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-2 border-purple-500 bg-purple-950/20 italic pl-3 py-1.5 my-2 text-zinc-300 rounded-r-lg text-xs">
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-white/10 text-purple-400 border border-white/10 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-zinc-900/90 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2 text-zinc-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="ml-1 text-zinc-500 font-mono">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length < 4 && (
              <div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.02]">
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                  Suggested Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/30 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all text-left cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3.5 border-t border-white/10 bg-zinc-950 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Warish AI anything..."
                className="flex-1 bg-zinc-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 transition-all shrink-0 cursor-pointer shadow-md"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
