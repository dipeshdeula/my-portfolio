import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import me from "@/assets/images/me.png";
import { githubLink, linkedinLink,facebookLink } from "@/constant/socialLink";
const Hero = () => {
    return(
        <section
           id="top"
            className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-32"
        >
           {/* Dotted grid backdrop + animated shine */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-90" aria-hidden />
      <div className="bg-grid-shine" aria-hidden />

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: Framed portrait */}
          <div className="hero-morph order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* Outer hairline frame */}
              <div className="relative rounded-[14px] border border-border/80 bg-surface/40 p-2.5 shadow-elevated backdrop-blur-sm">
                {/* Inner image frame */}
                <div className="relative overflow-hidden rounded-[8px] border border-border/60">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={me}
                      alt="Workspace — laptop with code on a clean desk"
                      className="h-full w-full object-cover grayscale-[15%] contrast-[1.02]"
                      loading="eager"
                    />
                  </div>
                  {/* Subtle vignette for depth */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(var(--background) / 0) 55%, hsl(var(--background) / 0.55) 100%)",
                    }}
                    aria-hidden
                  />
                  {/* Caption pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
                    <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-muted-foreground backdrop-blur-md">
                      Currently · Building
                    </span>
                    <span className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-muted-foreground backdrop-blur-md">
                      v · 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner ticks */}
              <span className="pointer-events-none absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b border-l border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b border-r border-foreground/40" aria-hidden />
            </div>
          </div>

          {/* Right: Headline + CTAs */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            {/* Eyebrow */}
            <div className="hero-morph flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">
              <span className="h-px w-8 bg-border" />
              Portfolio · 2026
            </div>

            {/* Headline */}
            <h1 className="hero-morph hero-morph-1 mt-7 max-w-[18ch] text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-tightest text-foreground sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem]">
              Full-stack developer building{" "}
              <span className="font-serif italic font-normal text-foreground">considered</span>{" "}
              software.
            </h1>

            {/* Single supporting line */}
            <p className="hero-morph hero-morph-2 mt-6 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              I'm <span className="text-foreground">Dipesh Deula</span> — a software engineer
              working across the stack with a focus on clean architecture and product craft.
            </p>

            {/* CTAs */}
            <div className="hero-morph hero-morph-3 mt-9 flex flex-wrap items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <a href="#projects">
                  View selected work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="subtle" size="lg">
                <a href="#contact">Contact me</a>
              </Button>
            </div>

            {/* Trust links */}
            <div className="hero-morph hero-morph-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <FaGithub className="h-3.5 w-3.5" aria-hidden /> GitHub
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <span className="h-3 w-px bg-border" aria-hidden />
              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <FaLinkedinIn className="h-3.5 w-3.5" aria-hidden /> LinkedIn
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <span className="h-3 w-px bg-border" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Open to roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

  export default Hero;