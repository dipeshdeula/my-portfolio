import SectionHeading from "./SectionHeading";
import aboutme from "@/assets/images/aboutme.png";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Location", value: "Hetauda, Nepal · Remote" },
  { label: "Recent Role", value: "Project Lead Developer (2025–2026)" },
  { label: "Stack", value: "ASP.NET Core · React · TypeScript" },
  { label: "Status", value: "Open for New Role" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About"
              title="Clean architecture, fast interfaces, and dependable delivery."
            />
            <p className="mt-6 text-[15.5px] leading-[1.75] text-muted-foreground">
              I build web platforms end-to-end — from database schemas and high-throughput APIs to
              responsive React interfaces. Recently served as{" "}
              <strong className="font-semibold text-foreground">
                Project Lead Developer at Seckout (2025–2026)
              </strong>
              , powering checkout and rewards across 1,000+ partner merchants, and now ready for my
              next engineering role.
            </p>

            {/* Clean Hairline Divided List (No chipped boxes) */}
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between gap-6 py-3.5">
                  <dt className="text-[13px] text-muted-foreground">{label}</dt>
                  <dd className="text-[13.5px] font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <aside className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl  shadow-elevated">
              <div className="overflow-hidden rounded-xl border border-border/80 bg-surface">
                <div className="aspect-[16/10.5] w-full">
                  <img
                    src={aboutme}
                    alt="Engineering architecture and development workflow"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
