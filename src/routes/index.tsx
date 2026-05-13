import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Layers,
  Boxes,
  Bot,
  Truck,
  FlaskConical,
  ShoppingBag,
  Factory,
  Cpu,
  Beaker,
  Plane,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDC — Strategic Digital Cognitive, powered by a Mixture of Experts" },
      {
        name: "description",
        content:
          "SDC delivers SAP-native strategic consulting, digital transformation, distinguished products, and agentic frameworks for modern enterprises.",
      },
      { property: "og:title", content: "SDC — Strategic Digital Cognitive" },
      {
        property: "og:description",
        content: "Strategy, transformation, products, and agents — engineered on deep SAP expertise.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    name: "Strategic Consulting",
    icon: Compass,
    to: "/strategic-consulting" as const,
    description:
      "We align business strategy with SAP S/4HANA and BTP to drive transformation — enabling efficient, scalable operations with reduced risk and data-driven decisions.",
  },
  {
    name: "Digital Transformation",
    icon: Layers,
    to: "/digital-transformation" as const,
    description:
      "We deliver digital transformation by optimizing operations, enabling data-driven insights, ensuring seamless system integration and empowering long-term growth.",
  },
  {
    name: "Distinguished Product",
    icon: Boxes,
    to: "/distinguished-product" as const,
    description:
      "Our intelligent solutions optimize pricing, streamline development, and improve financial operations. Powered by SAP expertise — efficient, scalable, measurable.",
  },
  {
    name: "Agentic Framework",
    icon: Bot,
    to: "/agentic-framework" as const,
    description:
      "Our Agentic Framework brings intelligent automation through agents that act and adapt in real time — efficient, scalable operations through advanced analytics.",
  },
];

const industries = [
  { name: "Wholesale & Distribution", icon: Truck },
  { name: "Life Science", icon: FlaskConical },
  { name: "Retail", icon: ShoppingBag },
  { name: "Consumer Goods", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "High Tech", icon: Cpu },
  { name: "Chemical", icon: Beaker },
  { name: "Travel, Hospitality & Leisure", icon: Plane },
];

function Home() {
  return (
    <SiteLayout>
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
            <span className="tracking-wider uppercase">Strategic · Digital · Cognitive</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl">
            Your go-to for <em className="text-gradient-gold not-italic">Strategic Digital Cognitive</em>.
            <br />
            Powered by a mixture of experts.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Elevate your business performance with SAP-native solutions tailored to your needs —
            strategy, transformation, products, and agents in one disciplined practice.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-glow text-primary-foreground px-7 py-3.5 font-medium hover:shadow-[var(--shadow-glow)] transition-shadow"
            >
              What we do best <ArrowUpRight className="size-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-7 py-3.5 font-medium hover:bg-surface transition"
            >
              Get Support
            </Link>
          </div>

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

      {/* SERVICES */}
      <section id="services" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand">What We Do Best</div>
              <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight max-w-2xl">
                Four practices. <em className="text-muted-foreground">One discipline.</em>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Solutions tailored to your business — engineered to integrate with your existing SAP
              landscape and deliver measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.name}
                  to={s.to}
                  className="group relative block rounded-3xl border border-border p-8 md:p-10 overflow-hidden hover:border-brand/40 transition-all duration-500"
                  style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="absolute top-8 right-8 font-display text-6xl text-muted-foreground/20">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Icon className="size-4 text-brand" />
                    Service
                  </div>
                  <h3 className="mt-6 font-display text-4xl md:text-5xl tracking-tight inline-flex items-center gap-3">
                    {s.name}
                    <ArrowUpRight className="size-6 opacity-40 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
                    {s.description}
                  </p>
                  <div className="mt-10 pt-6 border-t border-border text-sm text-brand">
                    Read more →
                  </div>
                  <div className="absolute -bottom-32 -right-32 size-64 rounded-full bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Who We Roll With</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-tight max-w-3xl">
            Customized solutions for <em>every industry.</em>
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="bg-surface p-8 hover:bg-surface-elevated transition group"
                >
                  <Icon className="size-7 text-brand" />
                  <div className="mt-6 font-display text-2xl leading-tight">{ind.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHERE WE WIN */}
      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">Where We Win</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight">
              Drive excellence with <em>industry-leading</em> expertise.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              SDC partners with leaders to translate ambition into operating reality.
              Our mixture-of-experts model brings the right specialists at the right moment of
              every engagement.
            </p>
            <p className="text-foreground">
              We measure success in business outcomes — not deliverables, deadlines, or decks.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium hover:opacity-90 transition"
                >
                  Get in touch <ArrowUpRight className="size-4" />
                </Link>
                <a href="mailto:info@sdcnow.com" className="text-muted-foreground hover:text-foreground transition">
                  info@sdcnow.com
                </a>
                <a href="tel:+14087824421" className="text-muted-foreground hover:text-foreground transition">
                  +1 (408) 782-4421
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
