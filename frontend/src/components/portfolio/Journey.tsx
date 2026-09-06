import { useState } from "react";
import SectionHeading from "./SectionHeading";

interface Milestone {
  period: string;
  title: string;
  org: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    period: "2024 — 2025",
    title: "Backend Developer Intern",
    org: "Kutumba Tech Pvt. Ltd. · Remote",
    description:
      "Built and maintained REST APIs for client products, strengthening the backend foundations that power smooth, consistent user experiences.",
  },
  {
    period: "2024 — 2025",
    title: "Software Engineer Intern",
    org: "Truenary Solutions · Onsite",
    description:
      "Developed core engineering fundamentals through real feature delivery, systems thinking, and disciplined execution from concept to implementation.",
  },
  {
    period: "2024 — 2025",
    title: "Full-Stack Developer",
    org: "PARS Pvt. Ltd. · Freelance",
    description:
      "Delivered client-facing web applications with practical product strategy, clean architecture, and UI decisions centered on clarity and usability.",
  },
  {
    period: "2024 — 2025",
    title: "Software Engineer",
    org: "Webpal Solutions Pvt. Ltd. · Remote",
    description:
      "Designed and delivered APIs, dashboards, and reusable component systems with measurable improvements in performance, maintainability, and DX.",
  },
  {
    period: "2025 — Present",
    title: "Project Lead · Full-Stack Developer",
    org: "Seckout Solutions Pvt. Ltd. · Remote",
    description:
      "Leading end-to-end delivery of production web and mobile platforms, combining product thinking, creative UI/UX direction, and dependable execution at scale.",
  },
];

const stairStepPolygons = [
  "polygon(31.8% 87.1%, 70% 87.1%, 66.8% 84.4%, 28.5% 84.4%)",
  "polygon(28.5% 74.8%, 65.3% 74.8%, 62.1% 72.1%, 25.6% 72.1%)",
  "polygon(25.6% 63.2%, 60.7% 63.2%, 57.5% 60.5%, 23.2% 60.5%)",
  "polygon(23.2% 52.1%, 56.3% 52.1%, 53.1% 49.4%, 21.3% 49.4%)",
  "polygon(21.3% 41.7%, 52.4% 41.7%, 49.1% 38.9%, 19.2% 38.9%)",
] as const;

const stairCharacterPositions = [
  { left: "49.5%", top: "85.2%" },
  { left: "46.8%", top: "73.1%" },
  { left: "44.5%", top: "61.5%" },
  { left: "42.2%", top: "50.2%" },
  { left: "39.8%", top: "40.1%" },
] as const;

const Journey = () => {
  const [activeStep, setActiveStep] = useState<number>(milestones.length - 1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeMilestone = milestones[activeStep];

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-border bg-surface/30 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-90" aria-hidden />
      <div className="bg-grid-shine" aria-hidden />
      <div className="container relative">
        <SectionHeading
          number="04"
          eyebrow="Journey"
          title="How I grew from intern to project lead."
          description="A clear timeline of roles, responsibilities, and outcomes that show how I progressed step by step." 
        />
        <div className="mt-14">
        <figure className="relative">
          <div className="relative overflow-hidden border-y border-border bg-surface/80 shadow-elevated">
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
                  Atmospheric dark perspective staircase with five labeled career milestones ascending from bottom right to upper center.
                </desc>

                <style>{`
                  @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
                  @keyframes pulseA { 0%,100% { opacity:.38 } 50% { opacity:.62 } }
                `}</style>

                <defs>
                  <radialGradient id="tl" cx="38%" cy="5%" r="65%">
                    <stop offset="0%" stopColor="#8ab4d4" stopOpacity=".2" />
                    <stop offset="100%" stopColor="#070b14" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="bf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="83%" stopColor="#070b14" stopOpacity="0" />
                    <stop offset="100%" stopColor="#040810" stopOpacity=".93" />
                  </linearGradient>
                  <linearGradient id="tm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b8d4ea" stopOpacity=".28" />
                    <stop offset="30%" stopColor="#b8d4ea" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="pg" cx="50%" cy="48%" r="55%">
                    <stop offset="0%" stopColor="#608ab8" stopOpacity=".52" />
                    <stop offset="100%" stopColor="#608ab8" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="sh" cx="50%" cy="28%" r="68%">
                    <stop offset="0%" stopColor="#3a6898" stopOpacity=".16" />
                    <stop offset="100%" stopColor="#3a6898" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="680" height="660" fill="transparent" />

                <rect x="118" y="86" width="14" height="518" fill="#0d1620" rx="2" />
                <rect x="119" y="86" width="3" height="518" fill="#1c2d42" opacity=".5" />

                <g opacity=".07">
                  <polygon points="148,96 292,96 270,78 126,78" fill="#1d2b3e" />
                  <polygon points="148,96 292,96 292,118 148,118" fill="#080f18" />
                </g>

                <g opacity=".16">
                  <polygon points="150,150 310,150 288,132 128,132" fill="#1b293c" />
                  <polygon points="150,150 310,150 310,172 150,172" fill="#070d17" />
                </g>

                <g opacity=".36">
                  <polygon points="157,210 332,210 310,192 135,192" fill="#192637" />
                  <line x1="157" y1="210" x2="332" y2="210" stroke="#243954" strokeWidth=".7" />
                  <polygon points="157,210 332,210 332,234 157,234" fill="#060c16" />
                </g>

                <ellipse cx="261" cy="267" rx="148" ry="54" fill="url(#sh)" />
                <polygon points="167,275 356,275 334,257 145,257" fill="#273950" />
                <polygon points="167,275 356,275 356,300 167,300" fill="#0b121e" />
                <line x1="167" y1="275" x2="356" y2="275" stroke="#3f5e7f" strokeWidth="1.2" />
                <circle cx="147" cy="266" r="12" fill="#192c48" stroke="#2c4870" strokeWidth=".8" />
                <text x="147" y="270" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#78aed8">05</text>

                <polygon points="180,344 383,344 361,326 158,326" fill="#1e2c3f" />
                <polygon points="180,344 383,344 383,368 180,368" fill="#090e18" />
                <line x1="180" y1="344" x2="383" y2="344" stroke="#2e445f" strokeWidth=".8" />
                <circle cx="160" cy="335" r="12" fill="#131f30" stroke="#1e2f49" strokeWidth=".8" />
                <text x="160" y="339" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#5888b2">04</text>

                <polygon points="196,417 413,417 391,399 174,399" fill="#1a2737" />
                <polygon points="196,417 413,417 413,440 196,440" fill="#080c16" />
                <line x1="196" y1="417" x2="413" y2="417" stroke="#273b53" strokeWidth=".8" />
                <circle cx="176" cy="408" r="12" fill="#101826" stroke="#17273e" strokeWidth=".8" />
                <text x="176" y="412" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#4c78a0">03</text>

                <polygon points="216,494 444,494 422,476 194,476" fill="#16222f" />
                <polygon points="216,494 444,494 444,517 216,517" fill="#070b15" />
                <line x1="216" y1="494" x2="444" y2="494" stroke="#1f2f48" strokeWidth=".8" />
                <circle cx="196" cy="485" r="12" fill="#0e1622" stroke="#132038" strokeWidth=".8" />
                <text x="196" y="489" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#406897">02</text>

                <polygon points="238,575 476,575 454,557 216,557" fill="#111a27" />
                <polygon points="238,575 476,575 476,598 238,598" fill="#060a12" />
                <line x1="238" y1="575" x2="476" y2="575" stroke="#1b2c3f" strokeWidth=".8" />
                <circle cx="218" cy="566" r="12" fill="#0c1320" stroke="#112034" strokeWidth=".8" />
                <text x="218" y="570" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#365c80">01</text>

                <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "float 4s ease-in-out infinite" }}>
                  <ellipse cx="262" cy="250" rx="28" ry="36" fill="url(#pg)" style={{ animation: "pulseA 3s ease-in-out infinite" }} />
                  <ellipse cx="269" cy="274" rx="19" ry="4.5" fill="#000" opacity=".38" />
                  <circle cx="262" cy="222" r="10" fill="#08101c" />
                  <path d="M253,232 Q248,250 250,268 L274,268 Q276,250 271,232 Z" fill="#08101c" />
                  <path d="M253,238 L242,252 Q244,255 247,253 L255,242" fill="#08101c" />
                  <path d="M271,238 L282,252 Q280,255 277,253 L269,242" fill="#08101c" />
                </g>
                

                <line x1="356" y1="275" x2="483" y2="275" stroke="#27415e" strokeWidth=".7" strokeDasharray="3,3" />
                <circle cx="356" cy="275" r="2.8" fill="#4880b0" />
                <line x1="383" y1="344" x2="483" y2="344" stroke="#1d2f4d" strokeWidth=".7" strokeDasharray="3,3" />
                <circle cx="383" cy="344" r="2.5" fill="#3468a0" />
                <line x1="413" y1="417" x2="483" y2="417" stroke="#17273f" strokeWidth=".7" strokeDasharray="3,3" />
                <circle cx="413" cy="417" r="2.5" fill="#2a5888" />
                <line x1="444" y1="494" x2="483" y2="494" stroke="#131d30" strokeWidth=".7" strokeDasharray="3,3" />
                <circle cx="444" cy="494" r="2.5" fill="#20476e" />
                <line x1="476" y1="575" x2="483" y2="575" stroke="#101728" strokeWidth=".7" strokeDasharray="3,3" />
                <circle cx="476" cy="575" r="2.5" fill="#1b3858" />

                <text x="490" y="266" fontFamily="sans-serif" fontSize="11" fill="#395e8e">Seckout · 2025–Now</text>
                <text x="490" y="280" fontFamily="sans-serif" fontSize="13" fill="#a8c6e4" fontWeight="500">Project Lead</text>
                <rect x="490" y="284" width="50" height="14" rx="7" fill="#182d50" opacity=".85" />
                <text x="515" y="294" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#5a90cc">Current</text>

                <text x="490" y="335" fontFamily="sans-serif" fontSize="11" fill="#2d4460">Webpal · 2024–2025</text>
                <text x="490" y="349" fontFamily="sans-serif" fontSize="13" fill="#6690b6" fontWeight="500">Software Engineer</text>

                <text x="490" y="408" fontFamily="sans-serif" fontSize="11" fill="#253b55">PARS · 2024–2025</text>
                <text x="490" y="422" fontFamily="sans-serif" fontSize="13" fill="#507698" fontWeight="500">Full-Stack Dev</text>

                <text x="490" y="485" fontFamily="sans-serif" fontSize="11" fill="#1d2e48">Truenary · 2024–2025</text>
                <text x="490" y="499" fontFamily="sans-serif" fontSize="13" fill="#406688" fontWeight="500">SE Intern</text>

                <text x="490" y="566" fontFamily="sans-serif" fontSize="11" fill="#192638">Kutumba · 2024–2025</text>
                <text x="490" y="580" fontFamily="sans-serif" fontSize="13" fill="#345670" fontWeight="500">Backend Intern</text>

                <text x="318" y="128" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#2d4860" letterSpacing="5">AHEAD</text>

                <rect width="680" height="660" fill="transparent" />
                <rect width="680" height="232" fill="transparent" />

                <circle cx="390" cy="152" r="1.5" fill="#5070a0" opacity=".4" />
                <circle cx="436" cy="120" r="1" fill="#406890" opacity=".3" />
                <circle cx="348" cy="106" r="1.5" fill="#508098" opacity=".26" />
                <circle cx="316" cy="140" r="1" fill="#406888" opacity=".36" />
                <circle cx="474" cy="174" r="1.2" fill="#507a98" opacity=".32" />
                <circle cx="286" cy="118" r="1" fill="#3a6080" opacity=".27" />
                <circle cx="358" cy="84" r="1.5" fill="#4a7898" opacity=".2" />
              </svg>

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
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
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

              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{
                    left: stairCharacterPositions[activeStep].left,
                    top: stairCharacterPositions[activeStep].top,
                  }}
                >
                  <div className="relative h-16 w-16">
                    <span className="absolute inset-0 rounded-full bg-primary/20 blur-[12px]" />
                    <svg viewBox="0 0 120 120" className="relative h-full w-full" aria-hidden>
                      <defs>
                        <radialGradient id="journeyCharacterGlow" cx="50%" cy="48%" r="55%">
                          <stop offset="0%" stopColor="#608ab8" stopOpacity=".52" />
                          <stop offset="100%" stopColor="#608ab8" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "float 4s ease-in-out infinite" }}>
                        <ellipse cx="60" cy="66" rx="28" ry="36" fill="url(#journeyCharacterGlow)" style={{ animation: "pulseA 3s ease-in-out infinite" }} />
                        <ellipse cx="67" cy="90" rx="19" ry="4.5" fill="#000" opacity=".38" />
                        <circle cx="60" cy="38" r="10" fill="#08101c" />
                        <path d="M51,48 Q46,66 48,84 L72,84 Q74,66 69,48 Z" fill="#08101c" />
                        <path d="M51,54 L40,68 Q42,71 45,69 L53,58" fill="#08101c" />
                        <path d="M69,54 L80,68 Q78,71 75,69 L67,58" fill="#08101c" />
                      </g>
                      
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="absolute z-10 max-w-[280px] -translate-x-1/2 -translate-y-[120%] rounded-xl border border-border/70 bg-background/50 bg-grid-soft p-6 transition-all duration-500"
                style={{
                  left: stairCharacterPositions[activeStep].left,
                  top: stairCharacterPositions[activeStep].top,
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/75">
                    Step {String(activeStep + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/75">
                    {activeMilestone.period}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
                  Reading
                </button>
                <h3 className="mt-2 text-[13px] font-medium text-foreground">
                  {activeMilestone.title}
                </h3>
                <p className="mt-1 text-[12px] text-foreground/80">
                  {activeMilestone.org}
                </p>
                <p className="mt-2 line-clamp-7 text-[12px] leading-relaxed text-foreground/75">
                  {activeMilestone.description}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
      
    </section>
  );
};

export default Journey;
