import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers,
  LayoutGrid,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import seckoutwebImg from "@/assets/images/projects/seckoutweb.png";
import seckoutadminImg from "@/assets/images/projects/seckoutadmin.png";
import ghrmsImg from "@/assets/images/projects/ghrms.png";
import navoaiImg from "@/assets/images/projects/navoai.png"
import { githubLink } from "@/constant/socialLink";

interface Project {
  index: string;
  tag: string;
  year: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  // metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    index: "01",
    tag: "FinTech & Commerce",
    year: "2025–2026",
    title: "Seckout Rewards Platform",
    summary:
      "Nepal's first rewards-driven checkout platform connecting shoppers with 1,000+ partner vendors.",
    role: "Project Lead Developer · Architecture, API & UI",
    stack: ["React.js", "TypeScript", "Spring Boot", "MySQL", "Tailwind CSS"],
    // metrics: [
    //   { label: "Page Load", value: "-62%" },
    //   { label: "Checkout", value: "+18%" },
    //   { label: "Vendors", value: "1,000+" },
    // ],
    image: seckoutwebImg,
    liveUrl: "https://www.seckout.com",
    repoUrl: githubLink,
  },
  {
    index: "02",
    tag: "Internal Product",
    year: "2025",
    title: "Seckout Admin Console",
    summary:
      "Operations dashboard for merchant onboarding, billing settlements, RBAC, and live audit logs.",
    role: "Lead Frontend Engineer · Design System & RBAC",
    stack: [
      "React.js",
      "TypeScript",
      "shadcn/ui",
      "TanStack Query",
      "Tailwind CSS",
    ],
    // metrics: [
    //   { label: "Manual Ops", value: "-40%" },
    //   { label: "Auditing", value: "Real-Time" },
    //   { label: "Security", value: "RBAC" },
    // ],
    image: seckoutadminImg,
    liveUrl: "https://www.seckout.com",
    repoUrl: githubLink,
  },
  {
    index: "03",
    tag: "G-HRMS",
    year: "2026",
    title: "Goverment Human Resource Management System.",
    summary:
      "A centralized human resource management platform designed to digitize government employee administration, organizational management, attendance, leave, payroll, transfers, promotions and employee records.",
    role: "Full-Stack Developer · Cloud Infrastructure",
    stack: [
      "Python/Django",
      "PostgreSQL",
      "React/Typescript",
      "AWS",
      "REST API",
    ],
    // metrics: [
    //   { label: "p95 Latency", value: "<120ms" },
    //   { label: "Tenants", value: "30+" },
    //   { label: "Uptime", value: "99.9%" },
    // ],
    image: ghrmsImg,
    liveUrl: "http://3.109.215.70/",
    repoUrl: githubLink,
  },
  // {
  //   index: "04",
  //   tag: "Lekha Nova",
  //   year: "2025",
  //   title: "Accounting, Billing & Inventory Management System",
  //   summary:
  //     "A comprehensive business management solution evolved from Laxmi Galla Bhandar, designed to streamline accounting, billing, inventory, sales, purchases and everyday business operations through a unified platform",
  //   role: "Full-Stack Developer · Cloud Infrastructure",
  //   stack: [
  //     "ASP.NET CORE",
  //     "PostgreSQL",
  //     "React/Typescript",
  //     "AWS",
  //     "REST API",
  //   ],
  //   // metrics: [
  //   //   { label: "p95 Latency", value: "<120ms" },
  //   //   { label: "Tenants", value: "30+" },
  //   //   { label: "Uptime", value: "99.9%" },
  //   // ],
  //   image: ghrmsImg,
  //   liveUrl: githubLink,
  //   repoUrl: githubLink,
  // },
  // {
  //   index: "05",
  //   tag: "Kina Now",
  //   year: "2026",
  //   title: "Multi-Vendor E-commerce Platform",
  //   summary:
  //     "A multi-vendor e-commerce application, designed to bring customers and multiple sellers together through a unified online shopping marketplace.",
  //   role: "Full-Stack Developer · Cloud Infrastructure",
  //   stack: [
  //     "ASP.NET CORE",
  //     "PostgreSQL",
  //     "React/Typescript",
  //     "GCP",
  //     "REST API",
  //   ],
  //   metrics: [
  //     { label: "p95 Latency", value: "<120ms" },
  //     { label: "Tenants", value: "30+" },
  //     { label: "Uptime", value: "99.9%" },
  //   ],
  //   image: ghrmsImg,
  //   liveUrl: githubLink,
  //   repoUrl: githubLink,
  // },

  {
    index: "06",
    tag: "NAVO A.I",
    year: "2026",
    title: "AI-Powered Teacher Copilot & Learning Platform",
    summary:
      "An AI-powered educational platform developed during a hackathon, designed to support students in their learning journey through intelligent assistance and AI-driven educational experiences",
    role: "Full-Stack Developer · Cloud Infrastructure",
    stack: ["React/Typescript", "GCP", "Supabase"],
    // metrics: [
    //   { label: "p95 Latency", value: "<120ms" },
    //   { label: "Tenants", value: "30+" },
    //   { label: "Uptime", value: "99.9%" },
    // ],
    image: navoaiImg,
    liveUrl: "https://navoai-lovat.vercel.app/",
    repoUrl: githubLink,
  },
  // {
  //   index: "07",
  //   tag: "Library Management System",
  //   year: "2024",
  //   title: "Library Administration & Management System",
  //   summary:
  //     "A web-based library management application developed to organize book records, manage library operations, and streamline book circulation and member administration.",
  //   role: "Full-Stack Developer · Cloud Infrastructure",
  //   stack: ["React/Typescript", "Python/Django", "PostgresSql"],
  //   metrics: [
  //     { label: "p95 Latency", value: "<120ms" },
  //     { label: "Tenants", value: "30+" },
  //     { label: "Uptime", value: "99.9%" },
  //   ],
  //   image: ghrmsImg,
  //   liveUrl: githubLink,
  //   repoUrl: githubLink,
  // },

  // {
  //   index: "08",
  //   tag: "Student Result Management System",
  //   year: "2024",
  //   title: "Student Academic Records & Result Management",
  //   summary:
  //     "A software application designed to manage student academic records, examination results, marks, and grade-related information through a centralized system.",
  //   role: "Full-Stack Developer",
  //   stack: ["HTML5", "CSS", "JS", "PHP"],
  //   metrics: [
  //     { label: "p95 Latency", value: "<120ms" },
  //     { label: "Tenants", value: "30+" },
  //     { label: "Uptime", value: "99.9%" },
  //   ],
  //   image: ghrmsImg,
  //   liveUrl: githubLink,
  //   repoUrl: githubLink,
  // },
];

/**
 * Dynamically computes (cx, cy) along the SVG quadratic Bezier curve
 * M 80 64 Q 500 -12 920 64 for any number of projects.
 */
const getArcNodePosition = (idx: number, count: number) => {
  const t = count > 1 ? 0.08 + (idx / (count - 1)) * 0.84 : 0.5;
  const u = 1 - t;
  const cx = u * u * 80 + 2 * u * t * 500 + t * t * 920;
  const cy = u * u * 64 + 2 * u * t * -12 + t * t * 64;
  return { cx, cy };
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"featured" | "grid">("featured");

  const total = projects.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || viewMode !== "featured") return;
    const timer = window.setInterval(goNext, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, viewMode, goNext]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "featured") return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewMode, goNext, goPrev]);

  const getRelativeOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60"
        aria-hidden
      />
      <div className="container relative">
        {/* Clean Header + View Switcher */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="03"
            eyebrow="Featured Work"
            title="Selected products & production systems."
          />

          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-soft"
              role="group"
              aria-label="Project view mode"
            >
              <button
                type="button"
                onClick={() => setViewMode("featured")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-mono text-[11.5px] font-semibold transition-all ${
                  viewMode === "featured"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                Featured Work
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-mono text-[11.5px] font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                All Products
              </button>
            </div>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground shadow-soft transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FaGithub className="h-3.5 w-3.5" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {viewMode === "featured" ? (
          <div
            className="mt-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Minimal Curved Arc Indicator + Product Pills */}
            <div className="relative mx-auto max-w-3xl">
              <svg
                viewBox="0 0 1000 72"
                className="h-12 w-full overflow-visible md:h-14"
                fill="none"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="projectCurveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity="0.08"
                    />
                    <stop
                      offset="50%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity="0.7"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity="0.08"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M 80 64 Q 500 -12 920 64"
                  stroke="url(#projectCurveGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {projects.map((proj, idx) => {
                  const pos = getArcNodePosition(idx, total);
                  const isActive = idx === activeIndex;
                  return (
                    <g
                      key={proj.title}
                      className="cursor-pointer"
                      onClick={() => setActiveIndex(idx)}
                    >
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r={isActive ? 11 : 7}
                        fill={
                          isActive ? "hsl(var(--primary))" : "hsl(var(--card))"
                        }
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        style={{
                          transition:
                            "all 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {projects.map((proj, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={proj.title}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-300 ${
                        isActive
                          ? "-translate-y-0.5 border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <span className="font-mono text-[11px] opacity-80">
                        {proj.index}
                      </span>
                      <span>{idx < 2 ? proj.title : proj.tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Curved Product Showcase (Auto-height responsive on all devices) */}
            <div
              className="relative mt-7 w-full"
              style={{ perspective: "1600px" }}
            >
              {projects.map((project, idx) => {
                const offset = getRelativeOffset(idx);
                const isActive = offset === 0;
                const isNeighbor = Math.abs(offset) === 1;
                const clampedOffset = Math.max(-2, Math.min(2, offset));

                const translateX = clampedOffset * 52;
                const translateY = Math.abs(clampedOffset) * 32;
                const translateZ = -Math.abs(clampedOffset) * 220;
                const rotateY = clampedOffset * -20;
                const rotateZ = clampedOffset * 4;
                const scale = isActive ? 1 : 0.85;

                return (
                  <article
                    key={project.title}
                    onClick={() => {
                      if (!isActive) setActiveIndex(idx);
                    }}
                    aria-hidden={!isActive}
                    style={{
                      transform: `translate3d(${translateX}%, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                      transition:
                        "transform 820ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), filter 650ms cubic-bezier(0.22, 1, 0.36, 1)",
                      zIndex: isActive ? 30 : 20 - Math.abs(offset),
                      opacity: isActive ? 1 : isNeighbor ? 0.4 : 0,
                      filter: isActive ? "blur(0px)" : "blur(1.5px)",
                    }}
                    className={`mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border bg-card ${
                      isActive
                        ? "relative border-primary/40 shadow-elevated"
                        : isNeighbor
                          ? "pointer-events-none absolute inset-x-0 top-0 hidden cursor-pointer select-none border-border hover:opacity-65 md:pointer-events-auto md:block"
                          : "pointer-events-none absolute inset-x-0 top-0 hidden select-none border-border"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Visual Product Preview (Larger, Cleaner) */}
                      <div className="relative border-b border-border bg-gradient-to-br from-primary/12 via-surface to-surface p-4 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-6">
                        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
                          <div className="flex items-center justify-between border-b border-border/70 bg-surface/80 px-3.5 py-2">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary/75" />
                              <span className="h-2.5 w-2.5 rounded-full bg-accent/65" />
                              <span className="h-2.5 w-2.5 rounded-full bg-success/75" />
                            </div>
                            <span className="font-mono text-[10.5px] font-medium text-muted-foreground">
                              {project.tag} · {project.year}
                            </span>
                          </div>
                          <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
                            <img
                              src={project.image}
                              alt={`${project.title} preview`}
                              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Concise Product Info */}
                      <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-8">
                        <div>
                          <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                            <span>{project.tag}</span>
                            <span className="text-muted-foreground">
                              {project.year}
                            </span>
                          </div>

                          <h3 className="mt-2 text-[1.55rem] font-extrabold leading-tight tracking-tight text-foreground">
                            {project.title}
                          </h3>

                          <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                            {project.summary}
                          </p>

                          <div className="mt-3 font-mono text-[12px] font-medium text-foreground/90">
                            {project.role}
                          </div>

                          {/* Visual Impact Metrics */}
                          {/* <div className="mt-5 grid grid-cols-3 gap-2">
                            {project.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="rounded-xl border border-border bg-surface/60 px-2.5 py-2 text-center"
                              >
                                <div className="font-mono text-[14px] font-bold text-primary">
                                  {m.value}
                                </div>
                                <div className="text-[10.5px] font-medium text-muted-foreground">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div> */}

                          {/* Tech Stack Pills */}
                          <ul className="mt-5 flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <li
                                key={tech}
                                className="rounded-md border border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/80 pt-5">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-[13px] font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover"
                            >
                              View Product
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          )}
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/60 px-4 py-2 text-[13px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            >
                              <FaGithub className="h-3.5 w-3.5" aria-hidden />
                              Source
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Minimal Navigation Controls */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:-translate-x-0.5 hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[12px] font-semibold text-foreground shadow-soft">
                <span className="text-primary">0{activeIndex + 1}</span>
                <span className="mx-1.5 text-muted-foreground">/</span>
                <span>0{total}</span>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:translate-x-0.5 hover:border-primary hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          /* All Products Grid */
          <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-elevated"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between font-mono text-[11px] font-semibold text-primary">
                      <span>{project.tag}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mt-2 text-[1.25rem] font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10.5px] text-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-border px-6 py-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary hover:underline"
                    >
                      View Product <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
