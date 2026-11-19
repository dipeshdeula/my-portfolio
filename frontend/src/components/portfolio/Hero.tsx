import { ArrowUpRight, Cpu, Gauge, GitBranch, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import heroImg from "@/assets/images/hero.png";
import { githubLink, linkedinLink } from "@/constant/socialLink";

const coreStack = [
  "ASP.NET Core",
  "Django",
  "React.js",
  "TypeScript",
  "PostgreSQL",
];


const Hero = () => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#0B0F19] pt-20 text-white sm:pt-24 lg:pt-28"
    >
      {/* =====================================================================
          1. DESKTOP FULL-BLEED WORKSPACE BACKDROP (lg and above)
             Left side keeps Dipesh crystal clear; Right side has high-contrast
             directional slate gradient for razor-sharp typography.
         ===================================================================== */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover object-[18%_center] xl:object-[22%_center]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Directional horizontal gradient: clear portrait on left -> rich dark slate on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11, 15, 25, 0.08) 0%, rgba(11, 15, 25, 0.22) 34%, rgba(11, 15, 25, 0.84) 51%, rgba(11, 15, 25, 0.96) 68%, rgba(11, 15, 25, 0.99) 100%)",
          }}
        />

        {/* Top & bottom cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 15, 25, 0.55) 0%, transparent 18%, transparent 76%, rgba(11, 15, 25, 0.88) 100%)",
          }}
        />
      </div>

      {/* Subtle ambient glow on mobile/tablet background */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(249, 115, 22, 0.14), transparent 70%)",
        }}
        aria-hidden
      />

      {/* =====================================================================
          2. MAIN HERO CONTENT (Responsive across Mobile, Tablet, Laptop & 4K)
         ===================================================================== */}
      <div className="container relative z-10 my-auto py-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Mobile & Tablet Dedicated Portrait Stage (< lg)
              Prevents text from overlapping Dipesh's face on smaller screens */}
          <div className="hero-morph lg:hidden">
            <div className="relative mx-auto max-w-[540px] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
                <img
                  src={heroImg}
                  alt="Dipesh Deula at engineering workstation"
                  className="h-full w-full object-cover object-[24%_22%]"
                  loading="eager"
                />
              </div>
              {/* Smooth bottom gradient blend */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(11, 15, 25, 0.85) 100%)",
                }}
                aria-hidden
              />
              {/* Compact overlay badge on mobile image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-lg border border-white/15 bg-slate-950/70 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md">
                  Dipesh Deula
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-slate-950/75 px-2.5 py-1 font-mono text-[10.5px] font-medium text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Typography, Stack Badges & CTAs */}
          <div className="mx-auto w-full max-w-[560px] lg:col-span-7 lg:col-start-6 lg:mx-0 lg:max-w-none xl:col-span-6 xl:col-start-7">
            {/* Eyebrow */}
            <div className="hero-morph flex items-center gap-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[11.5px]">
              <span className="h-[1.5px] w-6 bg-primary sm:w-8" />
              <span>FULL-STACK SOFTWARE ENGINEER</span>
            </div>

            {/* 3-Line Headline */}
            <h1 className="hero-morph hero-morph-1 mt-4 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-[3.1rem] md:text-[3.5rem] lg:text-[3.45rem] xl:text-[4.5rem]">
              <span className="block">Building reliable <span className="text-primary">Software, </span> from <span className="block lg:text-[3.5rem]">backend to frontend.</span></span>
              {/* <span className="block">
                <span className="text-[#F97316]">products</span> &amp; reliable
              </span>
              <span className="block">web systems.</span> */}
            </h1>
            {/* Building reliable software, from backend to frontend. */}

            {/* Supporting Bio */}
            <p className="hero-morph hero-morph-2 mt-4 max-w-[52ch] text-[14.5px] leading-[1.68] text-slate-200/95 sm:mt-5 sm:text-[16px]">
              I'm <strong className="font-semibold text-white">Dipesh Deula</strong>. I build full-stack applications, design scalable backend systems, and turn complex requirements into practical software solutions.
            </p>

            {/* Translucent Pill Badges for Tech Stack */}
            <div className="hero-morph hero-morph-2 mt-5 flex flex-wrap items-center gap-1.5 sm:mt-6 sm:gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] font-medium text-slate-100 backdrop-blur-md transition-colors duration-200 hover:border-[#F97316]/55 hover:bg-white/[0.12] sm:px-3 sm:text-[12px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Responsive Action Buttons (Side-by-side 2-col on mobile, inline on sm+) */}
            <div className="hero-morph hero-morph-3 mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(249,115,22,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA580C] sm:h-12 sm:px-6 sm:text-[14.5px]"
              >
                <span>Featured Work</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/25 bg-slate-900/45 px-4 text-[13.5px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/45 hover:bg-white/[0.1] sm:h-12 sm:px-6 sm:text-[14.5px]"
              >
                Let's Connect
              </a>
            </div>

            {/* Bottom Social & Availability Row */}
            <div className="hero-morph hero-morph-4 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-white/15 pt-5 text-[12.5px] font-medium text-slate-200 sm:mt-8 sm:gap-x-6 sm:text-[13px]">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <FaGithub className="h-4 w-4 text-white" aria-hidden />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F97316]" />
              </a>

              <span className="h-3.5 w-px bg-white/20" aria-hidden />

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4 text-white" aria-hidden />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F97316]" />
              </a>

              <span className="h-3.5 w-px bg-white/20" aria-hidden />

              <span className="inline-flex items-center gap-2 text-slate-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>Open for New Role</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
