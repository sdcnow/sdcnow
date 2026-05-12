import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Target, Users, Award } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SDC Consulting" },
      { name: "description", content: "SDC Consulting brings together a mixture of experts to deliver SAP-native strategy, transformation, and intelligent products." },
      { property: "og:title", content: "About SDC Consulting" },
      { property: "og:description", content: "Mission, expertise, and commitment behind the SDC mixture-of-experts model." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "Translate ambitious business strategy into operating reality on SAP. We pair deep S/4HANA and BTP expertise with a disciplined consulting practice to ship outcomes, not slideware.",
  },
  {
    icon: Users,
    title: "Our Expertise",
    body: "A mixture-of-experts model — domain consultants, SAP architects, data scientists, and product engineers — assembled around the moment of the engagement that matters most.",
  },
  {
    icon: Award,
    title: "Our Commitment",
    body: "We measure success in business outcomes: cycle time reduced, revenue recovered, decisions accelerated. Every engagement is built around durable change, not deliverables.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About SDC"
        title={
          <>
            Built by experts, for <em className="text-gradient-gold not-italic">operating leaders</em>.
          </>
        }
        description="SDC Consulting is a Texas-based SAP-native consultancy. We help enterprises align strategy with execution — across S/4HANA transformation, digital operations, and AI-driven products."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="rounded-3xl border border-border p-8 md:p-10"
                style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                <Icon className="size-7 text-brand" />
                <h2 className="mt-6 font-display text-3xl tracking-tight">{p.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">The Practice</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight">
              Strategic. Digital. <em>Cognitive.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Three disciplines, one practice. We build the strategy that aligns with business
              ambition, the digital backbone that lets it scale, and the cognitive layer — agents
              and intelligence — that compounds it over time.
            </p>
            <p className="text-foreground">
              The result is a partnership that meets you where you are and grows with where you're going.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Start a conversation <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
