import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, CTASection } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";

const insights = [
  { t: "Navigating Kenya's 2025 Finance Act", c: "Tax", d: "Key changes every CFO and SME owner needs to plan for in the coming financial year.", time: "6 min read" },
  { t: "Audit Readiness in 90 Days", c: "Audit", d: "A practical framework to prepare your finance function for the statutory audit cycle.", time: "8 min read" },
  { t: "Cash Flow Discipline for Growth", c: "Advisory", d: "How disciplined working-capital practices unlock sustainable scale.", time: "5 min read" },
  { t: "VAT Recovery: Common Pitfalls", c: "Tax", d: "Avoid the most frequent mistakes that cost Kenyan businesses real money each quarter.", time: "4 min read" },
  { t: "Building a Board-Ready Finance Pack", c: "Advisory", d: "What investors and boards actually want to see in your monthly reporting.", time: "7 min read" },
  { t: "NGO Compliance Essentials", c: "Compliance", d: "A starter checklist for non-profits operating across multiple Kenyan counties.", time: "6 min read" },
];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — OndakoMaina & Associates" },
      { name: "description", content: "Practical perspectives on tax, audit, compliance and financial advisory for Kenyan organisations." },
      { property: "og:title", content: "Insights from OndakoMaina & Associates" },
      { property: "og:description", content: "Articles, frameworks and case perspectives from our advisory desk." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Insights & Case Studies"
        title="Sharp perspectives from our advisory desk."
        intro="Frameworks, commentary and case learnings to help you make better financial decisions."
      />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((i) => (
            <article key={i.t} className="group rounded-2xl border border-border overflow-hidden hover:shadow-elegant transition-all bg-card">
              <div className="aspect-[16/10] bg-gradient-accent relative">
                <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">{i.c}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{i.time}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
