import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OndakoMaina & Associates" },
      { name: "description", content: "Talk to OndakoMaina & Associates. Reach our Nairobi office for tax, audit, advisory and compliance enquiries." },
      { property: "og:title", content: "Contact OndakoMaina & Associates" },
      { property: "og:description", content: "Book a confidential consultation with our advisory team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Talk to an expert."
        intro="Share a few details and our team will respond within one business day."
      />
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {[
              { Icon: Mail, t: "Email", v: "info@ondakoassociates.co.ke" },
              { Icon: Phone, t: "Phone", v: "0721 272 232" },
              { Icon: MapPin, t: "Office", v: "Nairobi, Kenya" },
            ].map(({ Icon, t, v }) => (
              <div key={t} className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{t}</div>
                  <div className="text-lg font-semibold text-foreground mt-1">{v}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-hero text-white p-7">
              <h3 className="font-semibold text-lg mb-2">Office hours</h3>
              <p className="text-white/80 text-sm">Mon — Fri · 8:30 AM — 5:30 PM EAT</p>
              <p className="text-white/60 text-xs mt-3">Consultations by appointment.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 p-8 rounded-2xl border border-border bg-card shadow-soft space-y-5">
            {status === "sent" && (
              <div className="rounded-lg bg-primary/10 text-primary text-sm px-4 py-3 font-medium">
                Thank you — your message has been received. We'll be in touch shortly.
              </div>
            )}
            {(["name","email","phone"] as const).map((f) => (
              <div key={f}>
                <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2">
                  {f === "name" ? "Full name" : f}
                </label>
                <input
                  name={f}
                  type={f === "email" ? "email" : "text"}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                {errors[f] && <p className="text-xs text-destructive mt-1">{errors[f]}</p>}
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2">Message</label>
              <textarea name="message" rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-light transition shadow-soft">
              Send message <Send className="size-4" />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
