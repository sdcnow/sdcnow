import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Linkedin } from "lucide-react";
import { useState } from "react";
import sdcLogo from "@/assets/sdc-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/strategic-consulting", label: "Strategic Consulting" },
  { to: "/digital-transformation", label: "Digital Transformation" },
  { to: "/distinguished-product", label: "Distinguished Product" },
  { to: "/agentic-framework", label: "Agentic Framework" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={sdcLogo} alt="SDC — Strategic Digital Cognitive" className="h-32 md:h-44 w-auto" />
        </Link>
        <nav className="hidden xl:flex items-center gap-5 text-sm text-muted-foreground">
          {navLinks.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap hover:text-foreground transition"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Get in Touch <ArrowUpRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-surface/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={sdcLogo} alt="SDC — Strategic Digital Cognitive" className="h-36 md:h-52 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Strategic Digital Cognitive — powered by a mixture of experts. SAP-native solutions,
            engineered for measurable business outcomes.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Company</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">OFFERINGS</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/strategic-consulting" className="hover:text-foreground">Strategic Consulting</Link></li>
            <li><Link to="/digital-transformation" className="hover:text-foreground">Digital Transformation</Link></li>
            <li><Link to="/distinguished-product" className="hover:text-foreground">Distinguished Product</Link></li>
            <li><Link to="/agentic-framework" className="hover:text-foreground">Agentic Framework</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SDC. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:info@sdcnow.com" className="hover:text-foreground">info@sdcnow.com</a>
            <a href="tel:+14087824421" className="hover:text-foreground">+1 (408) 782-4421</a>
            <span>Texas, USA</span>
            <a
              href="https://www.linkedin.com/company/sdcnow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SDC on LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 hover:text-foreground hover:border-brand/40 transition"
            >
              <Linkedin className="size-4 text-brand" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
