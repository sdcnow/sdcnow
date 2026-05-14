import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Megaphone, TrendingUp, ShieldCheck, Code2, Target, Gift } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import yieldsLogo from "@/assets/yields-logo.png";
import deductoLogo from "@/assets/deducto-logo.png";
import optipLogo from "@/assets/optip-logo.png";
import loyalyLogo from "@/assets/loyaly-logo.png";
import promoqLogo from "@/assets/promoq-logo.png";

export const Route = createFileRoute("/distinguished-product")({
  head: () => ({
    meta: [
      { title: "Distinguished Products — SDC" },
      { name: "description", content: "Flutrr, YieldS, DeductO, and DevP — AI-native SAP products built by SDC." },
      { property: "og:title", content: "Distinguished Products — SDC" },
      { property: "og:description", content: "AI-native products engineered for SAP — pricing intelligence, deduction adjudication, and developer acceleration." },
    ],
  }),
  component: DistinguishedProduct,
});

const products = [
  {
    name: "PromoQ",
    tag: "Win the Shelf Battle",
    icon: Megaphone,
    logo: promoqLogo,
    description:
      "A lightweight Trade Promotion Management solution that helps manufacturers create, manage, and execute promotions from a single workspace — simplifying planning, improving team coordination, and bringing visibility to trade activities for faster, more efficient execution.",
    metrics: [
      { k: "Unified", v: "Workspace" },
      { k: "Faster", v: "Execution" },
    ],
  },
  {
    name: "YieldS",
    tag: "Pricing Intelligence",
    icon: TrendingUp,
    logo: yieldsLogo,
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
    logo: deductoLogo,
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
  {
    name: "OptiP",
    tag: "Trade Promotion Optimization",
    icon: Target,
    logo: optipLogo,
    description:
      "AI-powered trade promotion optimization for manufacturers and CPG. Analyzes historical promotions, pricing, and trade spend to identify what drives profitable growth — cutting margin leakage and lifting ROI.",
    metrics: [
      { k: "Promotion", v: "ROI Uplift" },
      { k: "Margin", v: "Leakage Down" },
    ],
  },
  {
    name: "LoyalY",
    tag: "AI Loyalty Management",
    icon: Gift,
    logo: loyalyLogo,
    description:
      "AI-powered loyalty platform that helps brands build deeper customer relationships through personalized rewards, intelligent engagement, and data-driven insights — lifting repeat purchases, customer lifetime value, and long-term brand loyalty.",
    metrics: [
      { k: "Repeat", v: "Purchase Lift" },
      { k: "Lifetime", v: "Value Up" },
    ],
  },
] as const;

function DistinguishedProduct() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
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
            Six products engineered on deep enterprise expertise — built to address pricing,
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
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand">The Suite</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight max-w-2xl">
                Six products. <em className="text-muted-foreground">One discipline.</em>
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
                  <div className="absolute top-8 right-8 font-display text-6xl text-muted-foreground/20">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Icon className="size-4 text-brand" />
                    {p.tag}
                  </div>
                  <h3 className="mt-6 font-display text-5xl md:text-6xl tracking-tight flex items-center gap-4 flex-wrap">
                    {"logo" in p && p.logo ? (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="h-12 md:h-14 w-auto rounded-md bg-white/95 px-2 py-1 object-contain"
                      />
                    ) : "href" in p && p.href ? (
                      <a href={p.href as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-gradient-gold transition">
                        {p.name}
                        <ArrowUpRight className="size-7 opacity-40 group-hover:opacity-100 transition" />
                      </a>
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{p.description}</p>
                  <div className="mt-10 pt-6 border-t border-border grid grid-cols-2 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                        <div className="mt-1 font-display text-xl">{m.v}</div>
                      </div>
                    ))}
                  </div>
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
              SDC offers innovative solutions designed to address critical business
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

      {/* CTA */}
      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-border p-12 md:p-20 relative overflow-hidden" style={{ background: "var(--gradient-card)" }}>
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-3xl">
                Let&rsquo;s build the <em className="text-gradient-gold not-italic">distinguished</em> version of your operation.
              </h2>
              <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium hover:opacity-90 transition">
                  Get in touch <ArrowUpRight className="size-4" />
                </Link>
                <a href="mailto:info@sdcnow.com" className="text-muted-foreground hover:text-foreground transition">info@sdcnow.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
