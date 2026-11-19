import SectionHeading from "./SectionHeading";
import { Code2, Cpu, Database, GitMerge, LayoutGrid, Server } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: LayoutGrid,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["ASP.NET Core", "Spring Boot", "Django", "FastAPI", "REST", "GraphQL", "tRPC"],
  },
  {
    title: "Architecture",
    icon: Cpu,
    items: ["Clean Architecture", "Modular Monolith", "Domain Modeling", "MVC", "RBAC"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MS SQL Server", "MySQL", "Redis", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: Code2,
    items: ["Docker", "Nginx", "Git", "Linux", "Vite & Bun", "Vitest", "Postman"],
  },
  {
    title: "Delivery",
    icon: GitMerge,
    items: ["CI/CD Pipelines", "Code Review", "Observability", "Agile", "Tech Leadership"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-border bg-surface/40 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-80" aria-hidden />
      <div className="bg-grid-shine" aria-hidden />
      <div className="container relative">
        <SectionHeading
          number="02"
          eyebrow="Technical Stack"
          title="Core technologies & engineering toolkit."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-elevated"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/25 bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-[15px] font-bold tracking-tight text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-primary/80">
                      0{idx + 1}
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/90 bg-surface/75 px-2.5 py-1 font-mono text-[11.5px] font-medium text-foreground/90 transition-colors group-hover:border-primary/25"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
