"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] h-[var(--header-height)] bg-[rgba(var(--color-bg-primary),0.7)] backdrop-blur-md border-b border-[var(--color-border-color)] transition-colors duration-400">
        <div className="container header-container">
          <Link className="logo-link" href="/">
            <svg
              className="logo-icon-svg"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8"
                stroke="url(#logo-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M16 12V20"
                stroke="url(#logo-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="16" cy="8" r="3" fill="#06b6d4" />
            </svg>
            <span className="logo-text">UnityAI</span>
          </Link>

          <nav className="desktop-nav">
            <Link href="/#features" className={pathname === "/#features" ? "active" : ""}>
              Features
            </Link>
            <Link href="/pricing" className={pathname === "/pricing" ? "active" : ""}>
              Pricing
            </Link>
            <Link href="/#architecture" className={pathname === "/#architecture" ? "active" : ""}>
              Runtime
            </Link>
            <Link href="/documentation" className={pathname === "/documentation" ? "active" : ""}>
              Docs
            </Link>
            <Link href="/status" className={pathname === "/status" ? "active" : ""}>
              Status
            </Link>
            <ThemeToggle />
            <Link
              href="/login"
              className={clsx(
                "btn btn-secondary",
                pathname === "/login" && "active"
              )}
              style={{ padding: "0.375rem 1rem" }}
            >
              Login
            </Link>
          </nav>

          <button
            className="btn-mobile-menu"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div className={clsx("mobile-nav-panel", mobileMenuOpen && "open")}>
        <Link href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
        <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        <Link href="/#architecture" onClick={() => setMobileMenuOpen(false)}>Runtime</Link>
        <Link href="/documentation" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
        <Link href="/status" onClick={() => setMobileMenuOpen(false)}>Status</Link>
        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
      </div>
    </>
  );
}
