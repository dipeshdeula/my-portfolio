import { Cpu, Gauge, GitBranch, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Cpu,
    value: "END-TO-END",
    label: "Full-Stack Engineering",
  },
  {
    icon: ShieldCheck,
    value: "ARCHITECTURE",
    label: "Clean & Modular Systems",
  },
  {
    icon: Gauge,
    value: "PERFORMANCE",
    label: "Sub-120ms API Latency",
  },
  {
    icon: GitBranch,
    value: "DELIVERY",
    label: "Automated CI/CD & Cloud",
  },
];

const Highlights = () => {
  return (
    <section aria-label="Engineering Pillars" className="border-y border-border bg-card/80 backdrop-blur-sm">
      <div className="container">
        <ul className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="group flex items-center justify-between gap-3 px-4 py-5 transition-colors hover:bg-surface/60 md:px-6 md:py-6"
              >
                <div>
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {item.value}
                  </span>
                  <div className="mt-1 text-[14px] font-bold tracking-tight text-foreground">
                    {item.label}
                  </div>
                </div>
                <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary sm:flex">
                  <Icon className="h-4 w-4" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
