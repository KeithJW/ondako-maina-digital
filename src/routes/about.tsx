import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, CTASection } from "@/components/PageShell";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OndakoMaina & Associates" },
      { name: "description", content: "Discover the people, mission and values behind Nairobi's trusted tax and financial advisory firm." },
      { property: "og:title", content: "About OndakoMaina & Associates" },
      { property: "og:description", content: "Senior-led tax, audit and financial advisory rooted in trust, precision and integrity." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the firm"
        title="Trusted advisors. Sharper financial outcomes."
        intro="OndakoMaina & Associates is a Nairobi-based firm of certified accountants and financial advisors. We exist to make tax, audit and finance simple, strategic and stress-free for the organisations we serve."
      />

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, t: "Our Mission", d: "To deliver clear, ethical and forward-looking financial guidance that empowers our clients to grow with confidence." },
            { icon: Eye, t: "Our Vision", d: "To be East Africa's most trusted independent firm for tax, audit and financial advisory." },
            { icon: Heart, t: "Our Values", d: "Integrity. Precision. Partnership. Discretion. We hold ourselves to the standard our clients deserve." },
          ].map((b) => (
            <div key={b.t} className="p-7 rounded-2xl border border-border bg-card shadow-soft">
              <b.icon className="size-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-semibold mb-4">Our story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Built for Kenya's evolving business landscape.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to bring corporate-grade financial expertise to ambitious organisations of all sizes,
              OndakoMaina & Associates blends technical excellence with a partner-led approach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From early-stage startups to established corporates and institutions, we provide the structure,
              clarity and confidence required to scale responsibly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: "15+", l: "Years Experience" },
              { v: "200+", l: "Clients Served" },
              { v: "12", l: "Sectors Covered" },
              { v: "100%", l: "Confidentiality" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-2xl bg-card border border-border text-center shadow-soft">
                <div className="text-3xl font-bold text-primary font-display">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Award className="size-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Credentialed. Independent. Accountable.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team includes ICPAK-certified accountants, tax professionals and seasoned advisors —
            held to the highest standards of professional ethics and continuing education.
          </p>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
