import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, CTASection } from "@/components/PageShell";
import { services } from "@/data/services";
import { Calculator, ShieldCheck, TrendingUp, BookOpen, FileCheck2, Briefcase, CheckCircle2 } from "lucide-react";

const iconMap = { Calculator, ShieldCheck, TrendingUp, BookOpen, FileCheck2, Briefcase };

const detail: Record<string, string[]> = {
  "tax-consulting": ["Corporate & personal tax planning", "VAT, PAYE & withholding tax", "KRA dispute resolution", "Cross-border taxation"],
  "audit-assurance": ["Statutory & internal audits", "Risk-based audit planning", "Special-purpose engagements", "Internal controls review"],
  "financial-advisory": ["Forecasting & budgeting", "Business valuations", "M&A and transaction support", "Capital structuring"],
  "payroll-bookkeeping": ["Monthly bookkeeping", "Managed payroll", "Statutory deductions", "Management reporting"],
  "compliance": ["KRA, NSSF, NHIF filings", "Regulatory health-checks", "Company secretarial support", "AML & KYC frameworks"],
  "business-advisory": ["Operating model design", "Governance & board advisory", "Performance management", "Growth strategy"],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tax, Audit & Advisory | OndakoMaina & Associates" },
      { name: "description", content: "Tax consulting, audit & assurance, financial advisory, payroll, compliance and business advisory services in Nairobi, Kenya." },
      { property: "og:title", content: "Our Services — OndakoMaina & Associates" },
      { property: "og:description", content: "Comprehensive tax, audit and advisory services tailored to Kenyan businesses and institutions." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive financial expertise, all under one roof."
        intro="From day-to-day compliance to high-stakes advisory, our integrated practice gives you a single, accountable partner."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.slug} className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all">
                <div className="flex items-start gap-5">
                  <div className="size-14 rounded-2xl bg-gradient-accent text-white flex items-center justify-center shrink-0">
                    <Icon className="size-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-5">{s.short}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {detail[s.slug].map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
