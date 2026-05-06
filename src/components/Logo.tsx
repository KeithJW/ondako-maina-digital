import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  const stroke = light ? "white" : "oklch(0.32 0.13 258)";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="shrink-0">
        <circle cx="14" cy="21" r="10" stroke={stroke} strokeWidth="2.5" />
        <path d="M22 13 L32 13 L32 31 L24 31" stroke={stroke} strokeWidth="2.5" strokeLinecap="square" fill="none"/>
        <path d="M28 21 L32 21" stroke={stroke} strokeWidth="2.5" strokeLinecap="square"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`font-display font-bold text-base tracking-tight ${light ? "text-white" : "text-foreground"}`}>
          OndakoMaina
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          & Associates
        </span>
      </div>
    </Link>
  );
}
