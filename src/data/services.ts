import svcTax from "@/assets/svc-tax.jpg";
import svcAudit from "@/assets/svc-audit.jpg";
import svcAdvisory from "@/assets/svc-advisory.jpg";
import svcPayroll from "@/assets/svc-payroll.jpg";
import svcCompliance from "@/assets/svc-compliance.jpg";
import svcBusiness from "@/assets/svc-business.jpg";

export const services = [
  {
    slug: "tax-consulting",
    title: "Tax Consulting",
    short: "Strategic tax planning, advisory and dispute resolution that keeps you fully compliant while protecting your bottom line.",
    icon: "Calculator",
    image: svcTax,
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short: "Independent statutory and internal audits delivered with rigour, clarity and uncompromising professional standards.",
    icon: "ShieldCheck",
    image: svcAudit,
  },
  {
    slug: "financial-advisory",
    title: "Financial Advisory",
    short: "Forecasting, valuations, M&A support and capital strategy that turn financial data into confident decisions.",
    icon: "TrendingUp",
    image: svcAdvisory,
  },
  {
    slug: "payroll-bookkeeping",
    title: "Payroll & Bookkeeping",
    short: "Accurate, timely bookkeeping and managed payroll so you can focus on running and growing the business.",
    icon: "BookOpen",
    image: svcPayroll,
  },
  {
    slug: "compliance",
    title: "Compliance & Regulatory",
    short: "KRA, NSSF, NHIF and statutory compliance handled end-to-end — including filings, reviews and risk reporting.",
    icon: "FileCheck2",
    image: svcCompliance,
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    short: "Operating model, governance and growth advisory tailored for SMEs, corporates and impact-driven institutions.",
    icon: "Briefcase",
    image: svcBusiness,
  },
] as const;

export type Service = (typeof services)[number];
