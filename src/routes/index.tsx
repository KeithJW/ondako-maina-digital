import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/PageShell";
import { services } from "@/data/services";
import {
  ArrowRight, Calculator, ShieldCheck, TrendingUp, BookOpen,
  FileCheck2, Briefcase, CheckCircle2, Award, Users, Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OndakoMaina & Associates — Tax, Audit & Financial Advisory in Nairobi" },
      { name: "description", content: "Nairobi-based firm delivering tax consulting, audit, financial advisory and compliance services to SMEs, corporates and institutions." },
      { property: "og:title", content: "OndakoMaina & Associates" },
      { property: "og:description", content: "Tax & Financial Solutions Made Simple — trusted advisors in Nairobi." },
    ],
  }),
  component: HomePage,
});

const iconMap = { Calculator, ShieldCheck, TrendingUp, BookOpen, FileCheck2, Briefcase };

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-soft">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary-light animate-pulse" />
              Nairobi · Est. Tax & Audit Specialists
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-foreground">
              Tax & Financial<br/>
              Solutions <span className="text-gradient">Made Simple.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              OndakoMaina & Associates is a trusted advisory firm helping businesses, institutions and individuals
              navigate tax, audit and compliance with clarity and confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant hover:bg-primary-light transition-all">
                Get Consultation <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
                Explore Services
              </Link>
            </div>
            <div className="flex gap-8 pt-6 border-t border-border">
              {[
                { v: "15+", l: "Years Combined" },
                { v: "200+", l: "Clients Served" },
                { v: "100%", l: "Compliance Rate" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-primary font-display">{s.v}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-20 -rotate-3" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/40">
              <img src={heroImg} alt="OndakoMaina advisory team in consultation" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-elegant p-5 border border-border max-w-[220px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">ICPAK Member</div>
                  <div className="text-xs text-muted-foreground">Certified Practice</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-background rounded-2xl shadow-elegant p-5 border border-border max-w-[220px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">KRA Compliant</div>
                  <div className="text-xs text-muted-foreground">Audit Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-y border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          <span>Trusted by SMEs</span><span className="size-1 rounded-full bg-border" />
          <span>Corporates</span><span className="size-1 rounded-full bg-border" />
          <span>NGOs & Institutions</span><span className="size-1 rounded-full bg-border" />
          <span>Startups</span><span className="size-1 rounded-full bg-border" />
          <span>Family Offices</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-semibold mb-4">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Full-spectrum financial expertise, delivered with precision.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.slug} className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-elegant transition-all duration-300">
                  <div className="size-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.short}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT / EXPERTISE */}
      <section className="py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-semibold mb-4">Why OndakoMaina</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              A partner that understands the full picture.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine deep technical expertise with a personal, partner-led approach. Every engagement
              is led by senior advisors committed to clarity, accuracy and outcomes you can trust.
            </p>
            <ul className="space-y-4">
              {[
                "Senior partner-led engagements on every account",
                "End-to-end KRA & statutory compliance",
                "Audit-ready financial reporting frameworks",
                "Sector experience across SMEs, NGOs and corporates",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-light transition">
              About the firm <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Users, t: "Client-First", d: "Tailored advisory shaped around your sector and stage." },
              { icon: Award, t: "Credentialed", d: "ICPAK certified professionals with proven track record." },
              { icon: Building2, t: "Sector Depth", d: "From SMEs to listed corporates and institutions." },
              { icon: TrendingUp, t: "Outcome-Driven", d: "Clear strategy, measurable results, lasting value." },
            ].map((f) => (
              <div key={f.t} className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                <f.icon className="size-7 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-1">{f.t}</h4>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-semibold mb-4">Insights</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Perspectives from our advisory desk.</h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              All insights <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Navigating Kenya's 2025 Finance Act", c: "Tax", d: "Key changes every CFO and SME owner needs to plan for now." },
              { t: "Audit Readiness in 90 Days", c: "Audit", d: "A practical framework to prepare for your statutory audit cycle." },
              { t: "Cash Flow Discipline for Growth", c: "Advisory", d: "How disciplined working-capital practices unlock scale." },
            ].map((i) => (
              <article key={i.t} className="group rounded-2xl border border-border overflow-hidden hover:shadow-elegant transition-all">
                <div className="aspect-[16/10] bg-gradient-accent" />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary-light font-semibold">{i.c}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition">{i.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
