import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Layers, LineChart, GitBranch, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/digital-transformation")({
  head: () => ({
    meta: [
      { title: "Digital Transformation — SDC" },
      { name: "description", content: "Optimize processes, unlock insights, and integrate systems. SDC accelerates digital transformation with SAP-native expertise." },
      { property: "og:title", content: "Digital Transformation — SDC" },
      { property: "og:description", content: "Redefine how your business operates with SDC's transformation practice." },
    ],
  }),
  component: DigitalTransformation,
});

const pillars = [
  { icon: Layers, title: "Process Optimization", body: "Streamline core operations to improve throughput, quality, and cost." },
  { icon: LineChart, title: "Advanced Analytics", body: "Turn enterprise data into decisions through models, dashboards, and insight loops." },
  { icon: GitBranch, title: "System Integration", body: "Eliminate silos with seamless integration across SAP and the broader stack." },
  { icon: Zap, title: "Agility & Scale", body: "Architect for change — adopt new capabilities at the pace your market demands." },
];

function DigitalTransformation() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Digital Transformation"
        title={
          <>
            Redefine how your business <em className="text-gradient-gold not-italic">operates</em>.
          </>
        }
        description="By optimizing processes, we enhance efficiency and performance across your organization. Through advanced analytics, we turn data into actionable insights that support informed decision-making."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Pillars</div>
          <h2 className="mt-4 font-display text-5xl tracking-tight max-w-2xl">
            Integrated change, <em>delivered with discipline.</em>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl border border-border p-8"
                  style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <Icon className="size-6 text-brand" />
                  <h3 className="mt-5 font-display text-3xl tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="font-display text-5xl tracking-tight">
              Lead with confidence in the <em>digital era.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our integrated approach ensures your systems work in harmony, eliminating silos.
              We also drive innovation and automation to improve agility and scalability.
            </p>
          </div>
          <div className="md:col-span-6 flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              Accelerate transformation <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
