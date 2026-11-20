import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import InfinityMark from "./InfinityMark";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#journey", id: "journey" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0);

      if (y < 220) {
        setActiveSection("");
        return;
      }

      const viewportMid = y + window.innerHeight * 0.35;
      let current = "";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= viewportMid) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 text-foreground backdrop-blur-md"
          : "border-b border-white/10 bg-slate-950/20 text-white backdrop-blur-md",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Infinity Symbol Logo Only */}
        <a
          href="#top"
          aria-label="Dipesh Deula — Home"
          className="group flex items-center"
        >
          <InfinityMark
            size={56}
            strokeWidth={1.7}
            className={cn(
              "transition-transform duration-300 group-hover:scale-105",
              scrolled ? "text-foreground" : "text-white",
            )}
          />
        </a>

        {/* Center: Subtle Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-[13.5px] transition-colors duration-200",
                  isActive
                    ? "font-semibold text-primary"
                    : scrolled
                      ? "font-medium text-muted-foreground hover:text-foreground"
                      : "font-medium text-slate-200 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-primary transition-all duration-300",
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Pulsing "Available" Indicator, Theme Toggle, and "Get in touch" Button */}
        <div className="hidden items-center gap-3.5 md:flex">
          <span
            className={cn(
              "hidden items-center gap-2 text-[12.5px] font-medium lg:inline-flex",
              scrolled ? "text-muted-foreground" : "text-slate-200",
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available
          </span>
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-xl border px-4 text-[13px] font-medium transition-colors",
              scrolled
                ? "border-border bg-surface/60 text-foreground hover:border-primary/40 hover:bg-surface-elevated"
                : "border-white/20 bg-white/[0.06] text-white backdrop-blur-md hover:border-white/40 hover:bg-white/[0.12]",
            )}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className={cn("p-1.5", scrolled ? "text-foreground" : "text-white")}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1.5px] overflow-hidden bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 text-foreground backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {NAV.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "font-semibold text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-2 border-t border-border/60 pt-3">
              <ThemeToggle showLabels className="mb-3 w-full" />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
