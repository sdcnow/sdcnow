import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Heart, TrendingUp, ShieldCheck, Code2 } from "lucide-react";

export const Route = createFileRoute("/distinguished-product")({
  component: DistinguishedProduct,
});

const products = [
  {
    name: "Flutrr",
    tag: "Connection Intelligence",
    icon: Heart,
    href: "https://www.flutrr.com/",
    description:
      "A modern dating platform that redefines how meaningful connections are built. Intelligent matchmaking, verified profiles, and design that prioritizes trust and intent.",
    metrics: [
      { k: "Verified", v: "Profiles" },
      { k: "Intent-led", v: "Matching" },
    ],
  },
  {
    name: "YieldS",
    tag: "Pricing Intelligence",
    icon: TrendingUp,
    description:
      "Analyzes pricing data across business processes to uncover what truly drives profitability. Identifies winning strategies, flags revenue leakage, surfaces highest-yield models.",
    metrics: [
      { k: "Revenue", v: "Leakage Detection" },
      { k: "Pricing", v: "Confidence" },
    ],
  },
  {
    name: "DeductO",
    tag: "Trade Deduction AI",
    icon: ShieldCheck,
    description:
      "Turns trade deduction chaos into instant decisions. Connects to SAP TPM, OTC, FI-AR, and content repositories — validates every claim and posts the audited result back to SAP.",
    metrics: [
      { k: "No", v: "Workflows" },
      { k: "Full", v: "Audit Trail" },
    ],
  },
  {
    name: "DevP",
    tag: "SAP Development Copilot",
    icon: Code2,
    description:
      "Supercharges SAP development with AI. Accelerates how teams write, debug, retrofit, and resolve code across every step of the SAP lifecycle.",
    metrics: [
      { k: "Ship", v: "Faster" },
      { k: "Modernize", v: "with Confidence" },
    ],
  },
];

function DistinguishedProduct() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <header className="relative z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-to-br from-brand to-brand-glow flex items-center justify-center text-primary-foreground font-bold">
              S
            </div>
            <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">SDC</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition">Products</a>
            <a href="#approach" className="hover:text-foreground transition">Approach</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Get Support <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-brand" />
            <span className="tracking-wider uppercase">Distinguished Products</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl">
            Software that <em className="text-gradient-gold not-italic">distinguishes</em>
            <br />
            the work of experts.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Four products engineered on deep SAP expertise — built to address pricing,
            development, deductions, and connection at the level of measurable outcomes.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow text-primary-foreground px-7 py-3.5 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow"
            >
              Explore the products <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-3.5 font-medium hover:bg-surface transition"
            >
              Why SDC
            </a>
          </div>

          {/* Marquee row */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { k: "Built on", v: "Deep SAP" },
              { k: "Mixture of", v: "Experts" },
              { k: "Outcome", v: "Driven" },
              { k: "Texas,", v: "USA" },
            ].map((s) => (
              <div key={s.k} className="bg-surface p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-2 font-display text-2xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand">The Suite</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight max-w-2xl">
                Four products. <em className="text-muted-foreground">One discipline.</em>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Each solution integrates seamlessly into your existing landscape — scalable,
              performance-driven, focused on real business impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className="group relative rounded-3xl border border-border p-8 md:p-10 overflow-hidden hover:border-brand/40 transition-all duration-500"
                  style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
                >
                  {/* number */}
                  <div className="absolute top-8 right-8 font-display text-6xl text-muted-foreground/20">
                    0{i + 1}
                  </div>

                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Icon className="size-4 text-brand" />
                    {p.tag}
                  </div>

                  <h3 className="mt-6 font-display text-5xl md:text-6xl tracking-tight">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 hover:text-gradient-gold transition"
                      >
                        {p.name}
                        <ArrowUpRight className="size-7 opacity-40 group-hover:opacity-100 transition" />
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>

                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
                    {p.description}
                  </p>

                  <div className="mt-10 pt-6 border-t border-border grid grid-cols-2 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {m.k}
                        </div>
                        <div className="mt-1 font-display text-xl">{m.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* glow */}
                  <div className="absolute -bottom-32 -right-32 size-64 rounded-full bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">The Approach</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight">
              A <em>mixture</em> of experts, applied with intent.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              SDC Consulting offers innovative solutions designed to address critical business
              challenges across pricing, development, and financial operations. Built on deep
              SAP expertise, these solutions integrate seamlessly into your existing landscape.
            </p>
            <p className="text-foreground">
              Each product is scalable, performance-driven, and focused on delivering real
              business impact — not deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-3xl border border-border p-12 md:p-20 relative overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
                Let&rsquo;s build the <em className="text-gradient-gold not-italic">distinguished</em> version of your operation.
              </h2>
              <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
                <a href="mailto:support@sdcnow.com" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium hover:opacity-90 transition">
                  support@sdcnow.com <ArrowUpRight className="size-4" />
                </a>
                <a href="tel:+14087824421" className="text-muted-foreground hover:text-foreground transition">
                  +1 (408) 782-4421
                </a>
                <span className="text-muted-foreground">Texas, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} SDC Consulting</div>
          <div className="flex gap-6">
            <a href="#products" className="hover:text-foreground">Products</a>
            <a href="#approach" className="hover:text-foreground">Approach</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
