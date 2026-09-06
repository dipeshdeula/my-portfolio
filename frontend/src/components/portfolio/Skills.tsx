import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Bootstrap","HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["ASP.NET Core", "Django", "Fast API", "Rest","tRPC", "GraphQL"],
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "Modular Monolith", "Domain Modeling", "MVC"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MS-SQL Server", "MySql", "Supabase"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "Docker", "Postman", "Vitest"],
  },
  {
    title: "Workflow",
    items: ["CI / CD", "Code Review", "Observability", "Agile"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-border bg-surface/30 py-24 md:py-32"
    >
      {/* Dotted grid backdrop + animated shine */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-90" aria-hidden />
      <div className="bg-grid-shine" aria-hidden />
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Skills & Stack"
          title="A practical toolkit, organized the way I actually use it."
          description="I lean on tools that age well. The list below reflects what I reach for first when building production systems."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-surface p-6 transition-colors duration-200 hover:bg-surface-elevated md:p-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-[13px] font-semibold tracking-wide text-foreground">
                  {group.title}
                </h3>
                <span className="text-[11px] text-muted-foreground/60">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-elevated/70 px-2.5 py-1 text-[12px] text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
