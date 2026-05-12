import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Bot, Network, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/agentic-framework")({
  head: () => ({
    meta: [
      { title: "Agentic Framework — SDC Consulting" },
      { name: "description", content: "AI-driven agents that analyze, decide, and execute across your SAP landscape. SDC Consulting's Agentic Framework brings autonomy into operations." },
      { property: "og:title", content: "Agentic Framework — SDC Consulting" },
      { property: "og:description", content: "Intelligent, autonomous operations across your business." },
    ],
  }),
  component: AgenticFramework,
});

const capabilities = [
  { icon: Bot, title: "Autonomous Agents", body: "Agents that analyze data, make decisions, and execute tasks with minimal human intervention." },
  { icon: Network, title: "Seamless Orchestration", body: "Coordinated action across SAP and your wider technology landscape." },
  { icon: Sparkles, title: "Real-time Intelligence", body: "Advanced analytics and signals enable proactive, efficient operations." },
  { icon: ShieldCheck, title: "Governance by Design", body: "Audit trails, guardrails, and policy controls built into every workflow." },
];

function AgenticFramework() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Agentic Framework"
        title={
          <>
            Intelligent, autonomous <em className="text-gradient-gold not-italic">operations</em>.
          </>
        }
        description="SDC Consulting's Agentic Framework enables intelligent, autonomous operations across your business. AI-driven agents analyze data, make decisions, and execute tasks — proactively and efficiently."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Capabilities</div>
          <h2 className="mt-4 font-display text-5xl tracking-tight max-w-2xl">
            Autonomy with <em>intent and oversight.</em>
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
              Unlock new levels of <em>productivity.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With a focus on scalability, governance, and innovation, the framework brings new
              levels of productivity and agility to your operations. Partner with us to bring
              autonomy and intelligence into your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              Deploy your first agent <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
