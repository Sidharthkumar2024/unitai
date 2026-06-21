"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("");

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "getting-started", label: "Getting Started" },
    { id: "authentication", label: "Authentication" },
    { id: "using-with-clients", label: "Using with Clients" },
    { id: "endpoints", label: "API Endpoints" },
    { id: "models", label: "Supported Models" },
    { id: "troubleshooting", label: "Troubleshooting" }
  ];

  return (
    <div className="container flex items-start gap-8 py-[4rem] relative">
      
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 sticky top-[80px] self-start max-h-[calc(100vh-100px)] overflow-y-auto pr-4 hidden md:block">
        <h3 className="font-bold text-[1.125rem] mb-4 text-[var(--color-text-primary)]">Documentation</h3>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-3 py-2 rounded-lg text-[0.875rem] transition-colors ${
                activeSection === item.id 
                  ? "bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-bold" 
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 max-w-[800px]">
        <div className="mb-12">
          <h1 className="text-[2.5rem] font-bold mb-4">Setup Guide & API Reference</h1>
          <p className="text-[1.125rem] text-[var(--color-text-muted)]">
            Learn how to integrate the UnityAI gateway into your applications and AI agents.
          </p>
        </div>

        {/* Getting Started */}
        <section id="getting-started" className="mb-12 pt-[80px] -mt-[80px]">
          <h2 className="text-[2rem] font-bold mb-4 pb-2 border-b border-[var(--color-border-color)]">Getting Started</h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            UnityAI acts as an OpenAI and Anthropic compatible proxy. To get started, you simply point your existing API clients to our endpoint.
          </p>
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-color)] rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-[0.875rem] font-mono text-[var(--color-text-secondary)]">
{`API Origin: https://api.unityai.cloud
Anthropic-compatible URL: https://api.unityai.cloud/v1
OpenAI-compatible URL: https://api.unityai.cloud/api/v1
API Key: YOUR_API_KEY
Primary model: unityai-plus`}
            </pre>
          </div>
        </section>

        {/* Authentication */}
        <section id="authentication" className="mb-12 pt-[80px] -mt-[80px]">
          <h2 className="text-[2rem] font-bold mb-4 pb-2 border-b border-[var(--color-border-color)]">Authentication</h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            All requests must include your API key. Pass it as a Bearer token or via the respective client SDK header.
          </p>
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-color)] rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-[0.875rem] font-mono text-[var(--color-text-secondary)]">
{`Authorization: Bearer YOUR_API_KEY`}
            </pre>
          </div>
        </section>

        {/* Using with Clients */}
        <section id="using-with-clients" className="mb-12 pt-[80px] -mt-[80px]">
          <h2 className="text-[2rem] font-bold mb-4 pb-2 border-b border-[var(--color-border-color)]">Using with Clients</h2>
          
          <h3 className="text-[1.25rem] font-bold mt-6 mb-3">Cline Configuration</h3>
          <p className="mb-4 text-[var(--color-text-secondary)]">Use the following JSON configuration for Cline:</p>
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border-color)] rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-[0.875rem] font-mono text-[var(--color-text-secondary)]">
{`{
  "cline.apiProvider": "anthropic",
  "cline.anthropicBaseUrl": "https://api.unityai.cloud/v1",
  "cline.apiKey": "YOUR_API_KEY"
}`}
            </pre>
          </div>

          <h3 className="text-[1.25rem] font-bold mt-6 mb-3">Cursor / Windsurf</h3>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2 text-[var(--color-text-secondary)]">
            <li><strong>Cursor</strong>: Models &gt; Add custom model with Base URL <code>https://api.unityai.cloud/v1</code> and model ID <code>unityai-plus</code>.</li>
            <li><strong>Windsurf</strong>: AI Provider settings should use <code>https://api.unityai.cloud/v1</code> as the base URL.</li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12 pt-[80px] -mt-[80px]">
          <h2 className="text-[2rem] font-bold mb-4 pb-2 border-b border-[var(--color-border-color)]">Troubleshooting</h2>
          <ul className="list-disc pl-6 mb-4 flex flex-col gap-2 text-[var(--color-text-secondary)]">
            <li><strong>Connection errors</strong>: Confirm the API server is reachable or verify your client routes properly to <code>https://api.unityai.cloud</code>.</li>
            <li><strong>Authentication Failed</strong>: Ensure your API key is active in your UnityAI dashboard.</li>
          </ul>
        </section>
        
      </div>
    </div>
  );
}
