import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="pt-32 pb-16 bg-gradient-soft border-b border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-semibold mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-3xl">{title}</h1>
        {intro && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{intro}</p>}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to talk to an expert?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Schedule a confidential consultation with our advisory team and discover how we can support your goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center rounded-full bg-white text-primary px-8 py-3.5 text-sm font-semibold hover:shadow-glow transition-all"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
