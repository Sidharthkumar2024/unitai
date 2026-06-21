import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-4 gap-[2rem] pt-[4rem] pb-[3rem] border-t border-[var(--color-border-color)]">
          <div className="flex flex-col gap-4">
            <Link className="logo-link" href="/">
              <svg
                className="logo-icon-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="footer-logo-gradient"
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
                  stroke="url(#footer-logo-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M16 12V20"
                  stroke="url(#footer-logo-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="8" r="3" fill="#06b6d4" />
              </svg>
              <span className="logo-text">UnityAI</span>
            </Link>
            <p className="text-[0.875rem] text-[var(--color-text-muted)] max-w-[280px]">
              Frontier coding model proxy pool by UnityAI Technologies. Clean,
              error-free, production-grade output without AI slop.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-[var(--color-text-primary)]">Product</h4>
            <ul className="flex flex-col gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <li><Link href="/#" className="hover:text-[var(--color-primary)] transition-colors">Overview</Link></li>
              <li><Link href="/#features" className="hover:text-[var(--color-primary)] transition-colors">Features</Link></li>
              <li><Link href="/#architecture" className="hover:text-[var(--color-primary)] transition-colors">Runtime</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-[var(--color-text-primary)]">Resources</h4>
            <ul className="flex flex-col gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <li><Link href="/documentation" className="hover:text-[var(--color-primary)] transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">CLI Setup</Link></li>
              <li><Link href="/status" className="hover:text-[var(--color-primary)] transition-colors">Status</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-[var(--color-text-primary)]">Company</h4>
            <ul className="flex flex-col gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-[var(--color-border-color)] text-[0.8125rem] text-[var(--color-text-muted)] gap-4">
          <p>© 2026 UnityAI Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
