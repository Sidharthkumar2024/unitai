import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — UnityAI",
  description: "Simple, transparent pricing for UnityAI proxy gateway subscriptions, token packs, and pay-as-you-go frontier models.",
};

export default function PricingPage() {
  return (
    <div className="py-[6rem]">
      <div className="container">
        <div className="text-center mb-[4.5rem]">
          <h1 className="text-[3rem] font-bold mb-2">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h1>
          <p className="text-[1.125rem] text-[var(--color-text-muted)] max-w-[600px] mx-auto">
            Choose the plan that best fits your workflow. All plans include access to our high-performance proxy pool.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-[6rem]">
          
          {/* Hobby Plan */}
          <div className="card flex flex-col">
            <h3 className="text-[1.25rem] font-bold mb-2">Hobby</h3>
            <p className="text-[0.875rem] text-[var(--color-text-muted)] h-[2.5rem]">
              For individuals exploring UnityAI.
            </p>
            <div className="my-6">
              <span className="text-[2.5rem] font-bold">$0</span>
              <span className="text-[var(--color-text-muted)]"> / month</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>100K free tokens / month</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Standard proxy routing</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Community support</span>
              </li>
            </ul>
            <a href="/login" className="btn btn-secondary w-full">Get Started</a>
          </div>

          {/* Pro Plan */}
          <div className="card flex flex-col relative border-[var(--color-primary)] shadow-glow scale-[1.02] z-10">
            <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-[0.6875rem] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-[1.25rem] font-bold mb-2 text-[var(--color-primary)]">Pro</h3>
            <p className="text-[0.875rem] text-[var(--color-text-muted)] h-[2.5rem]">
              For professionals and teams scaling output.
            </p>
            <div className="my-6">
              <span className="text-[2.5rem] font-bold">$42.90</span>
              <span className="text-[var(--color-text-muted)]"> / month</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>5M included tokens / month</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Priority proxy routing</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Advanced reasoning access</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Email support</span>
              </li>
            </ul>
            <a href="/login" className="btn btn-primary w-full">Subscribe Now</a>
          </div>

          {/* Enterprise Plan */}
          <div className="card flex flex-col">
            <h3 className="text-[1.25rem] font-bold mb-2">Enterprise</h3>
            <p className="text-[0.875rem] text-[var(--color-text-muted)] h-[2.5rem]">
              Custom solutions for high-volume needs.
            </p>
            <div className="my-6">
              <span className="text-[2.5rem] font-bold">Custom</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Custom token volumes</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>Dedicated proxy nodes</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>SLA guarantees</span>
              </li>
              <li className="flex items-start gap-2 text-[0.875rem] text-[var(--color-text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <span>24/7 Priority support</span>
              </li>
            </ul>
            <a href="/login" className="btn btn-secondary w-full">Contact Sales</a>
          </div>
        </div>

        {/* Token Packs Section */}
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[2rem] font-bold mb-4">Pay-As-You-Go Token Packs</h2>
          <p className="text-[1.0625rem] text-[var(--color-text-muted)] mb-8">
            Need more tokens without upgrading your plan? Purchase non-expiring token packs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="card flex justify-between items-center p-6">
              <div>
                <h4 className="font-bold text-[1.125rem]">1 Million Tokens</h4>
                <p className="text-[0.875rem] text-[var(--color-text-muted)]">One-time purchase</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-[1.5rem]">$11.00</div>
                <a href="/login" className="text-[0.875rem] text-[var(--color-primary)] font-bold hover:underline">Buy Now</a>
              </div>
            </div>
            
            <div className="card flex justify-between items-center p-6">
              <div>
                <h4 className="font-bold text-[1.125rem]">10 Million Tokens</h4>
                <p className="text-[0.875rem] text-[var(--color-text-muted)]">Volume discount applied</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-[1.5rem]">$99.00</div>
                <a href="/login" className="text-[0.875rem] text-[var(--color-primary)] font-bold hover:underline">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
