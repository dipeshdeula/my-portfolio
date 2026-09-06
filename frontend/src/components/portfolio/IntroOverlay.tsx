import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import InfinityMark from "./InfinityMark";

/**
 * IntroOverlay — first-load brand reveal.
 * Large infinity mark draws in over a crystal-scatter white layer,
 * then dissolves upward to hand off to the hero section.
 *
 * Plays once per browser session.
 */
const IntroOverlay = () => {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setLeaving(true), 2400);
    const doneTimer = window.setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 3400);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done || !mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background",
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        leaving ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0",
      )}
      aria-hidden
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Crystal scatter — animated white shards */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="crystal-shard"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 12) * 0.12}s`,
              transform: `rotate(${(i * 23) % 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Center infinity mark — large, drawing in */}
      <div className="relative flex flex-col items-center gap-8 px-6">
        <div
          className={cn(
            "w-full max-w-[560px] transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            leaving ? "scale-[0.4] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
          )}
        >
          <InfinityMark
            size={560}
            strokeWidth={1.4}
            animated
            className="h-auto w-full text-foreground"
          />
        </div>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.5em] text-muted-foreground/70 transition-opacity duration-500",
            leaving ? "opacity-0" : "opacity-100 delay-700",
          )}
        >
          Dipesh Deula
        </span>
      </div>
    </div>
  );
};

export default IntroOverlay;
