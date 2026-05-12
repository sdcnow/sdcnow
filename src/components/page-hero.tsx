import { Sparkles } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-brand" />
          <span className="tracking-wider uppercase">{eyebrow}</span>
        </div>
        <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight max-w-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
