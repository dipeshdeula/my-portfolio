import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import seckoutwebImg from "@/assets/images/projects/seckoutweb.png"
import seckoutadminImg from "@/assets/images/projects/seckoutadmin.png"

interface Project {
  index: string;
  tag: string;
  year: string;
  title: string;
  problem: string;
  role: string;
  stack: string[];
  result: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    index: "01",
    tag: "Commerce",
    year: "2025",
    title: "Seckout Web application",
    problem:
      "SECKOUT is Nepal's first rewards-based shopping platform. Pay bills at 1000+ vendors and earn up to 100% reward each time you checkout.",
    role: "Project Lead — architecture, API, and UI/UX.",
    stack: ["React.js", "TypeScript", "Java Spring boot", "MySQL", "Tailwind CSS"],
    result: "Cut median page load by 62% and lifted checkout conversion by 18%.",
    image: seckoutwebImg,
    liveUrl: "www.seckout.com",
    repoUrl: "#",
  },
  {
    index: "02",
    tag: "Internal Tools",
    year: "2025",
    title: "Seckout Admin Console",
    problem:
      "An internal operations dashboard for managing customer accounts, billing, and audit logs.",
    role: "Frontend engineer — design system, role-based access, analytics layer.",
    stack: ["React", "Shadcn UI", "TypeScript", "Tailwind CSS"],
    result: "Reduced manual support workflows by ~40% across two ops teams.",
    image: seckoutadminImg,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    index: "03",
    tag: "Platform",
    year: "2023",
    title: "Lumen API Platform",
    problem:
      "A backend service powering content delivery for a multi-tenant publishing product.",
    role: "Backend engineer — schema design, caching, and developer experience.",
    stack: ["Node.js", "GraphQL", "Redis", "Docker", "OpenAPI"],
    result: "Sustained p95 latency under 120ms across 30+ tenants.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-foreground/20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:absolute lg:inset-0 lg:border-b-0 lg:border-r">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-full w-full object-fit-content grayscale-[30%] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-95 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground/90 backdrop-blur">
              {project.tag}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 lg:col-span-5 lg:col-start-8 lg:p-9">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              <span>Project · {project.index}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              {project.problem}
            </p>

            <dl className="mt-7 space-y-4 text-[13.5px]">
              <div className="grid grid-cols-[68px_1fr] gap-4">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  Role
                </dt>
                <dd className="text-foreground/90">{project.role}</dd>
              </div>
              <div className="grid grid-cols-[68px_1fr] gap-4">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  Impact
                </dt>
                <dd className="text-foreground/90">{project.result}</dd>
              </div>
              <div className="grid grid-cols-[68px_1fr] gap-4">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  Stack
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-surface-elevated/70 px-2 py-0.5 text-[11.5px] text-foreground/85"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-elevated/60 px-3 py-2 text-[12.5px] text-foreground transition-colors hover:border-foreground/30"
              >
                Live demo <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-3 py-2 text-[12.5px] text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <FaGithub className="h-3.5 w-3.5" aria-hidden /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" aria-hidden />
      <div className="container relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="03"
            eyebrow="Selected Work"
            title="A few projects that capture how I approach the craft."
            description="From product thinking down to the database layer — these are projects I've designed, built, and shipped."
          />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            More on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-14 space-y-6 md:space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
