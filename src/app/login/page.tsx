"use client";

import { useState } from "react";
import { ChevronRight, Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage("Check your email for the confirmation link.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setMessage("Successfully signed in! (Redirecting...)");
        // Typically you would redirect to a dashboard here
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full ambient-glow-1 blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full ambient-glow-2 blur-[100px] opacity-60"></div>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto drop-shadow-[0_4px_8px_rgba(99,102,241,0.3)]">
              <defs>
                <linearGradient id="login-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M8 8V18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18V8" stroke="url(#login-logo-grad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M16 12V20" stroke="url(#login-logo-grad)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="16" cy="8" r="3" fill="#06b6d4" />
            </svg>
          </Link>
          <h1 className="text-[2rem] font-bold">
            {isSignUp ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-[var(--color-text-muted)] mt-2">
            {isSignUp ? "Join the UnityAI proxy network." : "Log in to your UnityAI dashboard."}
          </p>
        </div>

        <div className="card !p-8 backdrop-blur-xl bg-[rgba(var(--color-card-bg),0.8)] border-[rgba(var(--color-border-color),0.5)]">
          <form onSubmit={handleAuth} className="flex flex-col gap-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold">
                {error}
              </div>
            )}
            {message && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-semibold">
                {message}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-[0.875rem] font-bold text-[var(--color-text-secondary)]">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[var(--color-text-muted)]">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-color)] rounded-xl py-3 pl-10 pr-4 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[0.875rem] font-bold text-[var(--color-text-secondary)]">Password</label>
                {!isSignUp && (
                  <a href="#" className="text-[0.75rem] font-bold text-[var(--color-primary)] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[var(--color-text-muted)]">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border-color)] rounded-xl py-3 pl-10 pr-4 text-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full py-3 mt-2 text-[1rem]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isSignUp ? "Sign Up" : "Sign In"}
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-[0.875rem] text-[var(--color-text-muted)]">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setMessage("");
              }}
              className="font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {isSignUp ? "Sign in" : "Create one"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
