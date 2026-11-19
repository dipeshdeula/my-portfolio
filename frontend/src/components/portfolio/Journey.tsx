import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CheckCircle2, ChevronDown, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import journeyImg from "@/assets/images/journey.png";

interface Milestone {
  period: string;
  title: string;
  org: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

const milestones: Milestone[] = [
  {
    period: "01/2025 – 05/2025",
    title: "Backend Developer Intern",
    org: "Kutumba Tech",
    location: "Kathmandu, Nepal",
    summary:
      "Engineered backend systems across Healthcare, OTT video streaming, real-time messaging, and library platforms.",
    achievements: [
      "Healthcare Platform: Integrated Jitsi Meet API for real-time patient-doctor video consultations and secure appointment booking.",
      "OTT Platform Backend: Built a Clean Architecture ASP.NET Core backend with Wasabi Cloud blob storage and FFmpeg adaptive video compression.",
      "Real-Time Chat & Library Systems: Designed a SignalR 1-to-1 & group messaging engine and a full-stack Python Django library system.",
    ],
    stack: ["ASP.NET Core", "Python Django", "SignalR", "FFmpeg", "Wasabi S3", "Jitsi API"],
  },
  {
    period: "05/2025 – 08/2025",
    title: "Software Engineer Intern",
    org: "Truenary Solutions Pvt. Ltd.",
    location: "Hetauda, Nepal",
    summary:
      "Contributed to a cross-platform monorepo application delivering shared UI and features across web and mobile.",
    achievements: [
      "Developed scalable cross-platform UI components using Next.js, Expo, and React Native within a unified monorepo.",
      "Evaluated and benchmarked Tamagui (monorepo CSS + UI system) to assess production performance and developer experience.",
      "Implemented and optimized shared design primitives to ensure visual consistency across web and mobile apps.",
    ],
    stack: ["Next.js", "React Native", "Expo", "TypeScript", "Tamagui", "Monorepo"],
  },
  {
    period: "04/2025 – Present",
    title: "Freelance Full-Stack Developer",
    org: "Pars Pvt. Ltd.",
    location: "Hetauda-2, Nepal",
    summary:
      "Designed and developed InstantMart, a scalable enterprise e-commerce platform with .NET Core 8 and React.js.",
    achievements: [
      "Architected a modular backend using .NET Core 8, Clean Architecture, MediatR, and CQRS.",
      "Improved system response performance by 60% through Redis caching and SQL query optimization.",
      "Integrated eSewa & Khalti payment gateways and engineered concurrency-safe cart and stock management.",
      "Built a React + Redux Toolkit real-time admin dashboard and automated Docker CI/CD pipelines with GitLab Runner.",
    ],
    stack: [".NET Core 8", "CQRS & MediatR", "Redis", "React.js", "Redux Toolkit", "Docker", "GitLab CI"],
  },
  {
    period: "2025 – 08/2026",
    title: "Software Project Manager | Full-Stack Developer",
    org: "Seckout Solutions Pvt. Ltd.",
    location: "Hetauda, Nepal",
    summary:
      "Led end-to-end product development, system architecture, and cross-functional engineering delivery at Seckout.",
    achievements: [
      "Developed and maintained web apps, admin dashboards, REST APIs, and mobile-integrated services with React, TypeScript, Spring Boot, and MySQL.",
      "Drove system architecture, database design, authentication, payment gateway integration, and real-time communication features.",
      "Coordinated developers, designers, marketing, and stakeholders across product requirements, sprint planning, QA, and releases.",
      "Managed cloud deployments, Docker environments, Nginx configuration, security hardening, and production troubleshooting.",
    ],
    stack: ["React.js", "TypeScript", "Spring Boot", "MySQL", "Docker", "Nginx"],
  },
  {
    period: "2026 – Present",
    title: "Freelance Full-Stack Developer",
    org: "Bagmati Province, Nepal",
    location: "Hetauda, Nepal",
    summary:
      "Developing G-HRMS, a government Human Resource Management System for Bagmati Province supporting employee, payroll, and document workflows.",
    achievements: [
      "Built REST APIs using Django REST Framework and interactive frontend modules with React, TypeScript, and React Query.",
      "Integrated AWS S3 private storage, role-based access control (RBAC), API documentation, and secure document handling.",
      "Contributed to system architecture, relational database design, debugging, and performance optimization for provincial deployment.",
    ],
    stack: ["Django REST", "React.js", "TypeScript", "React Query", "AWS S3", "RBAC"],
  },
  {
    period: "2026 & Beyond",
    title: "Open for New Engineering Role",
    org: "Next Career Chapter",
    location: "Remote / Onsite",
    summary:
      "Ready to bring end-to-end full-stack engineering, clean architecture, and technical leadership to a high-impact engineering team.",
    achievements: [
      "Proven production delivery across Government (G-HRMS), FinTech/Commerce (Seckout), Enterprise E-Commerce (InstantMart), and Healthcare/OTT.",
      "Deep hands-on expertise in .NET Core 8, Django REST, Spring Boot, React.js, TypeScript, Redis, AWS S3, and Docker/Nginx CI/CD.",
      "Available for Full-Stack Engineer, Backend Engineer, or Technical/Project Lead Developer roles.",
    ],
    stack: [".NET Core", "Django REST", "Spring Boot", "React & TS", "System Design", "CI/CD"],
  },
];

const stairStepPolygons = [
  "polygon(31.8% 87.1%, 70% 87.1%, 66.8% 84.4%, 28.5% 84.4%)",
  "polygon(28.5% 74.8%, 65.3% 74.8%, 62.1% 72.1%, 25.6% 72.1%)",
  "polygon(25.6% 63.2%, 60.7% 63.2%, 57.5% 60.5%, 23.2% 60.5%)",
  "polygon(23.2% 52.1%, 56.3% 52.1%, 53.1% 49.4%, 21.3% 49.4%)",
  "polygon(21.3% 41.7%, 52.4% 41.7%, 49.1% 38.9%, 19.2% 38.9%)",
  "polygon(19.8% 31.8%, 48.8% 31.8%, 45.6% 29.1%, 17.8% 29.1%)",
] as const;

const stairCharacterPositions = [
  { left: "49.5%", top: "84.5%" },
  { left: "46.8%", top: "72.4%" },
  { left: "44.5%", top: "60.8%" },
  { left: "42.2%", top: "49.5%" },
  { left: "39.8%", top: "39.4%" },
  { left: "35.5%", top: "29.5%" },
] as const;

const Journey = () => {
  const [activeStep, setActiveStep] = useState<number>(milestones.length - 1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const activeMilestone = milestones[activeStep];

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    setIsModalVisible(true);
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-border bg-surface/40 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-80" aria-hidden />
      <div className="bg-grid-shine" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Professional Experience"
          title="From backend intern to project lead — ready for what's next."
        />

        <div className="mt-12">
          <figure className="relative">
            <div className="relative rounded-3xl border border-border bg-card shadow-elevated dark:bg-surface/80">
              <div className="overflow-hidden rounded-3xl">
              <svg
                width="100%"
                viewBox="0 0 680 660"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="journeySvgTitle journeySvgDesc"
                className="h-auto w-full"
              >
                <title id="journeySvgTitle">Career staircase journey</title>
                <desc id="journeySvgDesc">
                  Perspective staircase with six career steps ascending from bottom right to upper center, culminating in Open for New Role.
                </desc>

                <defs>
                  <radialGradient id="sh" cx="50%" cy="28%" r="68%">
                    <stop offset="0%" stopColor={isDark ? "#3a6898" : "#fb923c"} stopOpacity={isDark ? ".22" : ".28"} />
                    <stop offset="100%" stopColor={isDark ? "#3a6898" : "#fb923c"} stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="680" height="660" fill="transparent" />

                <rect x="118" y="86" width="14" height="518" fill={isDark ? "#0d1620" : "#f3e4d7"} rx="2" />
                <rect x="119" y="86" width="3" height="518" fill={isDark ? "#1c2d42" : "#fb923c"} opacity=".65" />

                {/* Upper horizon steps */}
                <g opacity={isDark ? ".08" : ".2"}>
                  <polygon points="148,96 292,96 270,78 126,78" fill={isDark ? "#1d2b3e" : "#fed7aa"} />
                  <polygon points="148,96 292,96 292,118 148,118" fill={isDark ? "#080f18" : "#f5dec9"} />
                </g>

                <g opacity={isDark ? ".18" : ".35"}>
                  <polygon points="150,150 310,150 288,132 128,132" fill={isDark ? "#1b293c" : "#fed7aa"} />
                  <polygon points="150,150 310,150 310,172 150,172" fill={isDark ? "#070d17" : "#f2cfb0"} />
                </g>

                {/* Step 06 — Active 6th Ladder Step (Open for New Engineering Role) */}
                <ellipse cx="242" cy="204" rx="152" ry="52" fill="url(#sh)" />
                <polygon points="157,210 332,210 310,192 135,192" fill={isDark ? "#2d4360" : "#fed7aa"} />
                <polygon points="157,210 332,210 332,234 157,234" fill={isDark ? "#0e1828" : "#ea580c"} />
                <line x1="157" y1="210" x2="332" y2="210" stroke={isDark ? "#5a90cc" : "#c2410c"} strokeWidth="1.4" />
                <circle cx="137" cy="201" r="12" fill={isDark ? "#233d63" : "#ea580c"} stroke={isDark ? "#4880b0" : "#c2410c"} strokeWidth="1" />
                <text x="137" y="205" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#ffffff">06</text>

                {/* Step 05 — Bagmati Province G-HRMS (2026–Present) */}
                <polygon points="167,275 356,275 334,257 145,257" fill={isDark ? "#233449" : "#ffedd5"} />
                <polygon points="167,275 356,275 356,300 167,300" fill={isDark ? "#0b121e" : "#f97316"} />
                <line x1="167" y1="275" x2="356" y2="275" stroke={isDark ? "#3f5e7f" : "#ea580c"} strokeWidth="1" />
                <circle cx="147" cy="266" r="12" fill={isDark ? "#192c48" : "#fff7ed"} stroke={isDark ? "#2c4870" : "#fb923c"} strokeWidth="1" />
                <text x="147" y="270" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#78aed8" : "#c2410c"}>05</text>

                {/* Step 04 — Seckout Solutions (2025–08/2026) */}
                <polygon points="180,344 383,344 361,326 158,326" fill={isDark ? "#1e2c3f" : "#fff7ed"} />
                <polygon points="180,344 383,344 383,368 180,368" fill={isDark ? "#090e18" : "#fb923c"} />
                <line x1="180" y1="344" x2="383" y2="344" stroke={isDark ? "#2e445f" : "#f97316"} strokeWidth=".9" />
                <circle cx="160" cy="335" r="12" fill={isDark ? "#131f30" : "#fff7ed"} stroke={isDark ? "#1e2f49" : "#fdba74"} strokeWidth="1" />
                <text x="160" y="339" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#5888b2" : "#ea580c"}>04</text>

                {/* Step 03 — Pars Pvt. Ltd. (04/2025–Present) */}
                <polygon points="196,417 413,417 391,399 174,399" fill={isDark ? "#1a2737" : "#fff7ed"} />
                <polygon points="196,417 413,417 413,440 196,440" fill={isDark ? "#080c16" : "#fdba74"} />
                <line x1="196" y1="417" x2="413" y2="417" stroke={isDark ? "#273b53" : "#fb923c"} strokeWidth=".9" />
                <circle cx="176" cy="408" r="12" fill={isDark ? "#101826" : "#fff7ed"} stroke={isDark ? "#17273e" : "#fdba74"} strokeWidth="1" />
                <text x="176" y="412" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#4c78a0" : "#ea580c"}>03</text>

                {/* Step 02 — Truenary Solutions (05/2025–08/2025) */}
                <polygon points="216,494 444,494 422,476 194,476" fill={isDark ? "#16222f" : "#fef2e8"} />
                <polygon points="216,494 444,494 444,517 216,517" fill={isDark ? "#070b15" : "#fed7aa"} />
                <line x1="216" y1="494" x2="444" y2="494" stroke={isDark ? "#1f2f48" : "#fdba74"} strokeWidth=".9" />
                <circle cx="196" cy="485" r="12" fill={isDark ? "#0e1622" : "#fff7ed"} stroke={isDark ? "#132038" : "#fed7aa"} strokeWidth="1" />
                <text x="196" y="489" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#406897" : "#ea580c"}>02</text>

                {/* Step 01 — Kutumba Tech (01/2025–05/2025) */}
                <polygon points="238,575 476,575 454,557 216,557" fill={isDark ? "#111a27" : "#fffbf7"} />
                <polygon points="238,575 476,575 476,598 238,598" fill={isDark ? "#060a12" : "#fed7aa"} />
                <line x1="238" y1="575" x2="476" y2="575" stroke={isDark ? "#1b2c3f" : "#fdba74"} strokeWidth=".9" />
                <circle cx="218" cy="566" r="12" fill={isDark ? "#0c1320" : "#fff7ed"} stroke={isDark ? "#112034" : "#fed7aa"} strokeWidth="1" />
                <text x="218" y="570" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={isDark ? "#365c80" : "#f97316"}>01</text>

                {/* Connector lines */}
                <line x1="332" y1="210" x2="483" y2="210" stroke={isDark ? "#5a90cc" : "#ea580c"} strokeWidth="1.1" strokeDasharray="3,3" />
                <circle cx="332" cy="210" r="3.2" fill={isDark ? "#5a90cc" : "#ea580c"} />
                <line x1="356" y1="275" x2="483" y2="275" stroke={isDark ? "#27415e" : "#f97316"} strokeWidth=".8" strokeDasharray="3,3" />
                <circle cx="356" cy="275" r="2.6" fill={isDark ? "#4880b0" : "#f97316"} />
                <line x1="383" y1="344" x2="483" y2="344" stroke={isDark ? "#1d2f4d" : "#fb923c"} strokeWidth=".8" strokeDasharray="3,3" />
                <circle cx="383" cy="344" r="2.5" fill={isDark ? "#3468a0" : "#fb923c"} />
                <line x1="413" y1="417" x2="483" y2="417" stroke={isDark ? "#17273f" : "#fdba74"} strokeWidth=".8" strokeDasharray="3,3" />
                <circle cx="413" cy="417" r="2.5" fill={isDark ? "#2a5888" : "#fdba74"} />
                <line x1="444" y1="494" x2="483" y2="494" stroke={isDark ? "#131d30" : "#fed7aa"} strokeWidth=".8" strokeDasharray="3,3" />
                <circle cx="444" cy="494" r="2.5" fill={isDark ? "#20476e" : "#fed7aa"} />
                <line x1="476" y1="575" x2="483" y2="575" stroke={isDark ? "#101728" : "#fed7aa"} strokeWidth=".8" strokeDasharray="3,3" />
                <circle cx="476" cy="575" r="2.5" fill={isDark ? "#1b3858" : "#fb923c"} />

                {/* Right-side labels: Step 06 (Hiring Manager Callout) */}
                <text x="490" y="198" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill={isDark ? "#78aed8" : "#c2410c"}>Next Chapter · Ready Now</text>
                <text x="490" y="213" fontFamily="sans-serif" fontSize="14" fill={isDark ? "#ffffff" : "#0f172a"} fontWeight="800">Open for New Role</text>
                <rect x="490" y="219" width="110" height="16" rx="8" fill={isDark ? "#4f46e5" : "#ea580c"} />
                <text x="545" y="230" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fontWeight="700" fill="#ffffff">AVAILABLE FOR HIRE</text>

                {/* Step 05 — Bagmati Province G-HRMS */}
                <text x="490" y="268" fontFamily="sans-serif" fontSize="11" fill={isDark ? "#395e8e" : "#64748b"}>Bagmati Province · 03/2026–11/2026</text>
                <text x="490" y="283" fontFamily="sans-serif" fontSize="13" fill={isDark ? "#a8c6e4" : "#0f172a"} fontWeight="600">Full-Stack Developer</text>

                {/* Step 04 — Seckout Solutions */}
                <text x="490" y="335" fontFamily="sans-serif" fontSize="11" fill={isDark ? "#2d4460" : "#64748b"}>Seckout · 2025–08/2026</text>
                <text x="490" y="349" fontFamily="sans-serif" fontSize="13" fill={isDark ? "#6690b6" : "#0f172a"} fontWeight="600">Project Lead Developer</text>

                {/* Step 03 — Pars Pvt. Ltd. */}
                <text x="490" y="408" fontFamily="sans-serif" fontSize="11" fill={isDark ? "#253b55" : "#64748b"}>Pars Pvt. Ltd. · 04/2025–09/2026</text>
                <text x="490" y="422" fontFamily="sans-serif" fontSize="13" fill={isDark ? "#507698" : "#1e293b"} fontWeight="600">Full-Stack Developer</text>

                {/* Step 02 — Truenary Solutions */}
                <text x="490" y="485" fontFamily="sans-serif" fontSize="11" fill={isDark ? "#1d2e48" : "#64748b"}>Truenary · 05/2025–08/2025</text>
                <text x="490" y="499" fontFamily="sans-serif" fontSize="13" fill={isDark ? "#406688" : "#334155"} fontWeight="600">Software Engineer Intern</text>

                {/* Step 01 — Kutumba Tech */}
                <text x="490" y="566" fontFamily="sans-serif" fontSize="11" fill={isDark ? "#192638" : "#64748b"}>Kutumba Tech · 01/2025–05/2025</text>
                <text x="490" y="580" fontFamily="sans-serif" fontSize="13" fill={isDark ? "#345670" : "#475569"} fontWeight="600">Backend Developer Intern</text>
              </svg>
              </div>

              {/* Interactive Stair Hitboxes (Steps 01 to 06) */}
              <div className="absolute inset-0">
                {stairStepPolygons.map((clipPath, index) => {
                  const stepLabel = String(index + 1).padStart(2, "0");
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={stepLabel}
                      type="button"
                      aria-label={`Step ${stepLabel}: ${milestones[index].title}`}
                      className="absolute inset-0 cursor-pointer rounded-none border-none bg-transparent p-0"
                      style={{ clipPath }}
                      onMouseEnter={() => handleSelectStep(index)}
                      onFocus={() => handleSelectStep(index)}
                      onClick={() => handleSelectStep(index)}
                    >
                      <span
                        className={`absolute inset-0 transition-all duration-200 ${
                          isActive
                            ? "bg-primary/30 shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.65)]"
                            : "bg-transparent hover:bg-primary/20"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Circular Avatar (journey.png) Hopping Across All 6 Steps */}
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={{
                    left: stairCharacterPositions[activeStep].left,
                    top: stairCharacterPositions[activeStep].top,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsModalVisible(true)}
                    className="pointer-events-auto relative flex flex-col items-center focus:outline-none"
                    title="View milestone details"
                  >
                    <span className="absolute -inset-2 rounded-full bg-primary/40 blur-md" />
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary bg-card shadow-glow transition-transform hover:scale-105 sm:h-14 sm:w-14">
                      <img
                        src={journeyImg}
                        alt="Dipesh Deula"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-black/30 blur-[1px]" />
                  </button>
                </div>
              </div>

              {/* Larger Active Milestone Modal Anchored Along With Avatar Image */}
              {isModalVisible && (
                <div
                  className="z-20 mt-4 w-full rounded-2xl border border-border bg-card/95 p-5 shadow-elevated backdrop-blur-xl transition-all duration-500 dark:bg-background/95 md:absolute md:mt-0 md:w-[380px] md:-translate-x-1/2 md:-translate-y-[112%]"
                  style={{
                    left: stairCharacterPositions[activeStep].left,
                    top: stairCharacterPositions[activeStep].top,
                  }}
                >
                  {/* Top Bar: Step & Period + X Cancel Button */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                        Step 0{activeStep + 1}
                      </span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-[11px] font-medium text-muted-foreground">
                        {activeMilestone.period}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsModalVisible(false)}
                      aria-label="Close experience modal"
                      title="Close"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border/80 bg-surface/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Role & Organization */}
                  <h3 className="mt-2.5 text-[16px] font-bold leading-snug text-foreground sm:text-[17px]">
                    {activeMilestone.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[12px] font-semibold text-primary">
                    <span>{activeMilestone.org}</span>
                    <span className="text-muted-foreground">· {activeMilestone.location}</span>
                  </div>

                  {/* Summary */}
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
                    {activeMilestone.summary}
                  </p>

                  {/* Expandable Achievements Drawer */}
                  {isExpanded && (
                    <div className="mt-4 animate-fade-up border-t border-border/80 pt-3.5">
                      <div className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-foreground/80">
                        Key Responsibilities & Achievements
                      </div>
                      <ul className="mt-2.5 max-h-[195px] space-y-2 overflow-y-auto pr-1 text-[12.5px] leading-relaxed text-muted-foreground">
                        {activeMilestone.achievements.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                        {activeMilestone.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10.5px] font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom-Center Chevron Dropdown Trigger */}
                  <div className="mt-4 flex justify-center border-t border-border/60 pt-2.5">
                    <button
                      type="button"
                      onClick={() => setIsExpanded((v) => !v)}
                      aria-expanded={isExpanded}
                      className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-hover"
                    >
                      <span>
                        {isExpanded ? "Hide details" : "View in details"}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Journey;
