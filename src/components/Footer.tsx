import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-white/70 max-w-xs">
            Trusted tax, audit, and financial advisory partners for Kenya's most ambitious organisations.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/insights" className="hover:text-white">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white">Practice</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Tax Consulting</li>
            <li>Audit & Assurance</li>
            <li>Financial Advisory</li>
            <li>Payroll & Bookkeeping</li>
            <li>Compliance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 shrink-0" /><span>info@ondakoassociates.co.ke</span></li>
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 shrink-0" /><span>0721 272 232</span></li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /><span>Nairobi, Kenya</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} OndakoMaina & Associates. All rights reserved.</p>
          <p>Nairobi · Kenya</p>
        </div>
      </div>
    </footer>
  );
}
