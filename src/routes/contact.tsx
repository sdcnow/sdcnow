import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SDC" },
      { name: "description", content: "Get in touch with SDC. Email info@sdcnow.com or call +1 (408) 782-4421. Based in Texas, USA." },
      { property: "og:title", content: "Contact SDC" },
      { property: "og:description", content: "For further assistance, contact us." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "info@sdcnow.com",
    href: "mailto:info@sdcnow.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (408) 782-4421",
    href: "tel:+14087824421",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Texas, USA",
  },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            For further assistance, <em className="text-gradient-gold not-italic">contact us</em>.
          </>
        }
        description="Reach the SDC team for partnerships, support, or to explore how the mixture-of-experts model fits your organization."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          {channels.map((c) => {
            const Icon = c.icon;
            const inner = (
              <>
                <Icon className="size-6 text-brand" />
                <div className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-2 font-display text-3xl tracking-tight">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="rounded-3xl border border-border p-8 hover:border-brand/40 transition"
                style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-3xl border border-border p-8"
                style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-3xl border border-border p-12 md:p-20 relative overflow-hidden"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-5xl md:text-6xl tracking-tight max-w-3xl">
                Ready when you are.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
                Tell us about your business, your SAP landscape, and the outcomes you're chasing.
                We'll respond within one business day.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@sdcnow.com"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Email info@sdcnow.com <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="tel:+14087824421"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-medium hover:bg-surface transition"
                >
                  Call +1 (408) 782-4421
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
