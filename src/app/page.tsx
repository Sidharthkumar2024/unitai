"use client";

import { ChevronRight, ChevronDown, Terminal, PanelsTopLeft, Briefcase, Target, Cpu, Database } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overall");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container relative">
          <div className="hero-logo-box">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="hero-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="url(#hero-logo-grad)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M16 12V20" stroke="url(#hero-logo-grad)" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="16" cy="8" r="3.5" fill="#06b6d4" />
            </svg>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            UnityAI
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The frontier coding model proxy pool delivering clean, error-free, production-grade output.
          </motion.p>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            No AI slop. No generic filler. Just clean, hallucination-free, production-grade results.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link className="btn btn-primary" href="/login">
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a className="btn btn-secondary" href="#features">
              Explore Capabilities
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="metric-item">
            <div className="metric-val text-gradient">20B+</div>
            <div className="metric-lbl">Tokens processed monthly</div>
          </div>
          <div className="metric-item">
            <div className="metric-val text-gradient">1M</div>
            <div className="metric-lbl">Context window tokens</div>
          </div>
          <div className="metric-item">
            <div className="metric-val text-gradient">Deep</div>
            <div className="metric-lbl">Thinking mode enabled</div>
          </div>
          <div className="metric-item">
            <div className="metric-val text-gradient">Web</div>
            <div className="metric-lbl">Search & vision capable</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>What <span className="text-gradient">UnityAI</span> is good at</h2>
            <p>Built for complex workflows, execution-heavy tasks, and production-grade outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card feature-card">
              <div className="icon-box">
                <Terminal className="w-5 h-5" />
              </div>
              <h3>Engineering & Code</h3>
              <p>Clean, production-grade code synthesized across logic pipelines. Verified output with 99.8% quality score in internal tests.</p>
              <div className="feature-tag-box">
                <div className="feature-tag-lbl">Clean output score</div>
                <div className="feature-tag-val">99.8%</div>
              </div>
            </div>
            
            <div className="card feature-card">
              <div className="icon-box">
                <PanelsTopLeft className="w-5 h-5" />
              </div>
              <h3>UI/UX Design</h3>
              <p>Strong design judgment and polished interface implementation. Responsive, accessible components built for real products.</p>
              <div className="feature-tag-box">
                <div className="feature-tag-lbl">Grade output</div>
                <div className="feature-tag-val">Production</div>
              </div>
            </div>
            
            <div className="card feature-card">
              <div className="icon-box">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3>Office & Business</h3>
              <p>Structured documents, summaries, presentations, and business output chains. Fast turnaround for team workflows.</p>
              <div className="feature-tag-box">
                <div className="feature-tag-lbl">Document quality</div>
                <div className="feature-tag-val">Structured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="arch-section">
        <div className="container">
          <div className="section-header">
            <h2>Architecture & <span className="text-gradient">Unified Framework</span></h2>
            <p>Powered by an intelligent proxy pool that routes requests across frontier models.</p>
          </div>
          <div className="arch-card">
            <div className="text-center">
              <div className="badge-pool">
                <Target className="w-3.5 h-3.5" />
                Proxy Model Advantage
              </div>
            </div>
            <div className="flow-container flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flow-node">
                <Cpu className="w-5 h-5" />
                <span>Model Pool</span>
              </div>
              <ChevronRight className="flow-arrow w-5 h-5 rotate-90 sm:rotate-0" />
              <div className="flow-node pulse-highlight">
                <Target className="w-5 h-5" />
                <span>Orchestration</span>
              </div>
              <ChevronRight className="flow-arrow w-5 h-5 rotate-90 sm:rotate-0" />
              <div className="flow-node">
                <Database className="w-5 h-5" />
                <span>Unified Output</span>
              </div>
            </div>
            <p className="arch-desc">
              UnityAI operates as a frontier coding proxy pool, unifying powerful models through a single endpoint — intelligently routing each request for clean, error-free, production-grade output without AI slop.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Section */}
      <section className="bench-section">
        <div className="container">
          <div className="section-header">
            <div className="mb-2"><span className="badge-pool">Internal Benchmark 2.0</span></div>
            <h2>Performance that <span className="text-gradient">leads the field</span></h2>
            <p>1,500 test runs. UnityAI delivers the highest overall score with clean error-free output.</p>
          </div>
          
          <div className="bench-tabs-container">
            <button className={clsx("bench-tab", activeTab === "overall" && "active")} onClick={() => setActiveTab("overall")}>overall</button>
            <button className={clsx("bench-tab", activeTab === "speed" && "active")} onClick={() => setActiveTab("speed")}>speed</button>
            <button className={clsx("bench-tab", activeTab === "accuracy" && "active")} onClick={() => setActiveTab("accuracy")}>accuracy</button>
          </div>
          
          <div className="bench-bars">
            <div className="bench-row">
              <div className="bench-label">UnityAI Core</div>
              <div className="bench-bar-bg">
                <motion.div className="bench-bar-fill primary-fill" initial={{ width: 0 }} animate={{ width: "96%" }} transition={{ duration: 1 }} />
              </div>
              <div className="bench-score">96</div>
            </div>
            <div className="bench-row">
              <div className="bench-label">Competitor A</div>
              <div className="bench-bar-bg">
                <motion.div className="bench-bar-fill" initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1 }} />
              </div>
              <div className="bench-score">82</div>
            </div>
            <div className="bench-row">
              <div className="bench-label">Competitor B</div>
              <div className="bench-bar-bg">
                <motion.div className="bench-bar-fill" initial={{ width: 0 }} animate={{ width: "74%" }} transition={{ duration: 1 }} />
              </div>
              <div className="bench-score">74</div>
            </div>
          </div>
          <p className="text-center text-[0.6875rem] text-[var(--color-text-muted)] mt-6">Internal UnityAI test results. Not publicly verified benchmarks.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-color)]">
        <div className="container">
          <div className="section-header">
            <h2>Frequently asked <span className="text-gradient">questions</span></h2>
          </div>
          <div className="faq-list">
            {[
              { q: "Does UnityAI support a 1M context window?", a: "Yes, where supported by the active runtime. UnityAI uses intelligent model proxy routing to maximize available context." },
              { q: "Does UnityAI support deep thinking?", a: "Yes, integrated advanced reasoning from underlying models provides deep thinking steps where the active runtime supports it." },
              { q: "Is API pricing public?", a: "Custom proxy pricing is tailored to your volume. Contact us for details on UnityAI access." },
              { q: "Who develops UnityAI?", a: "UnityAI is developed and refined by UnityAI Technologies, focused on production-grade AI infrastructure." },
              { q: "What kind of work is UnityAI best for?", a: "Optimized for multi-agent orchestrations, production code, advanced UI logic, business documents, and workflow automation." },
            ].map((faq, idx) => (
              <div key={idx} className={clsx("faq-item", activeFaq === idx && "active")}>
                <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="faq-content" style={{ maxHeight: activeFaq === idx ? "200px" : "0" }}>
                  <div className="faq-content-inner p-[0_1.75rem_1.5rem_1.75rem] text-[0.9375rem] text-[var(--color-text-secondary)]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-[7rem] text-center border-b border-[var(--color-border-color)]">
        <div className="container">
          <h2 className="text-[2.5rem] font-bold mb-2">Launch real work with <span className="text-gradient">UnityAI</span></h2>
          <p className="text-[var(--color-text-muted)] text-[1.0625rem] mb-8">Bring production-grade AI execution into your products, teams, and workflows.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/login">
              Request Access
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link className="btn btn-secondary" href="/documentation">Read Docs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
