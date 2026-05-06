import { LucideIcon } from "lucide-react";

export const services = [
  {
    slug: "tax-consulting",
    title: "Tax Consulting",
    short: "Strategic tax planning, advisory and dispute resolution that keeps you fully compliant while protecting your bottom line.",
    icon: "Calculator",
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short: "Independent statutory and internal audits delivered with rigour, clarity and uncompromising professional standards.",
    icon: "ShieldCheck",
  },
  {
    slug: "financial-advisory",
    title: "Financial Advisory",
    short: "Forecasting, valuations, M&A support and capital strategy that turn financial data into confident decisions.",
    icon: "TrendingUp",
  },
  {
    slug: "payroll-bookkeeping",
    title: "Payroll & Bookkeeping",
    short: "Accurate, timely bookkeeping and managed payroll so you can focus on running and growing the business.",
    icon: "BookOpen",
  },
  {
    slug: "compliance",
    title: "Compliance & Regulatory",
    short: "KRA, NSSF, NHIF and statutory compliance handled end-to-end — including filings, reviews and risk reporting.",
    icon: "FileCheck2",
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    short: "Operating model, governance and growth advisory tailored for SMEs, corporates and impact-driven institutions.",
    icon: "Briefcase",
  },
] as const;

export type Service = (typeof services)[number];
