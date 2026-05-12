import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Target, TrendingUp, Workflow } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/strategic-consulting")({
  head: () => ({
    meta: [
      { title: "Strategic Consulting — SDC" },
      { name: "description", content: "Align business strategy with SAP S/4HANA and BTP. SDC delivers structured planning that reduces risk and unlocks measurable value." },
      { property: "og:title", content: "Strategic Consulting — SDC" },
      { property: "og:description", content: "Bridging the gap between business strategy and SAP technology." },
    ],
  }),
  component: StrategicConsulting,
});

const capabilities = [
  { icon: Compass, title: "S/4HANA Strategy", body: "Roadmap and value case for transformation that aligns with operational goals." },
  { icon: Workflow, title: "BTP Innovation", body: "Identify high-leverage extension and integration opportunities on SAP BTP." },
  { icon: Target, title: "Operating Alignment", body: "Translate strategy into measurable initiatives across business and IT." },
  { icon: TrendingUp, title: "Value Realization", body: "Track outcomes through governance frameworks and KPIs that matter." },
];

function StrategicConsulting() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Strategic Consulting"
        title={
          <>
            Bridge strategy and <em className="text-gradient-gold not-italic">SAP execution</em>.
          </>
        }
        description="We collaborate closely with business and technology stakeholders to align enterprise operations with strategic S/4HANA transformation and SAP BTP innovation initiatives. Through rigorous analysis, structured planning, and a value-driven approach, we identify opportunities to optimize processes, enhance operational agility, and accelerate digital transformation while delivering scalable, measurable business outcomes across the enterprise."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Capabilities</div>
          <h2 className="mt-4 font-display text-5xl tracking-tight max-w-2xl">
            Clarity, reduced risk, <em>confident decisions.</em>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-3xl border border-border p-8"
                  style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <Icon className="size-6 text-brand" />
                  <h3 className="mt-5 font-display text-3xl tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">Outcome</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight">
              A resilient, adaptive <em>SAP ecosystem.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With a focus on long-term scalability and performance, we help you build an SAP
              landscape that adapts as your business evolves. Partner with us to align strategy
              with execution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              Talk to a strategist <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
