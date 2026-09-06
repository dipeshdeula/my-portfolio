import SectionHeading from "./SectionHeading";
import aboutme from "@/assets/images/aboutme.png";

const facts = [
  { label: "Location", value: "Nepal · Remote" },
  { label: "Focus", value: "Full-stack platforms" },
  { label: "Stack", value: "ASP.NET Core · TS · React.js" },
  { label: "Status", value: "Open to roles" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <SectionHeading
              number="01"
              eyebrow="About"
              title="A developer who cares about the details that survive a year in production."
            />
            <div className="mt-9 space-y-5 text-[15px] leading-[1.75] text-muted-foreground">
              <p>
                I build web applications end to end — from data models and APIs to the polish on the
                final pixel. My work tends to live between product and engineering: I like
                understanding the problem, shaping a calm interface around it, and making the system
                behind it predictable.
              </p>
              <p>
                I value clean architecture, thoughtful state management, and code that the next
                person can read without a guided tour. I'm equally comfortable wiring up backend
                services, designing component systems, or tightening performance until things feel
                quietly fast.
              </p>
              <p className="text-foreground/90">
                Outside of features, I care about reliability, accessibility, and shipping work I'm
                proud to put my name on.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Framed supporting image */}
              <div className="relative mb-8 rounded-[12px] border border-border/80 bg-surface/40 p-2 shadow-soft">
                <div className="relative overflow-hidden rounded-[6px] border border-border/60">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={aboutme}
                      alt="Macro of a circuit board — engineering craft"
                      className="h-full w-full object-cover grayscale-[20%] contrast-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(var(--background) / 0) 60%, hsl(var(--background) / 0.5) 100%)",
                    }}
                    aria-hidden
                  />
                </div>
                <span className="pointer-events-none absolute -left-1 -top-1 h-2.5 w-2.5 border-l border-t border-foreground/40" aria-hidden />
                <span className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 border-r border-t border-foreground/40" aria-hidden />
                <span className="pointer-events-none absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b border-l border-foreground/40" aria-hidden />
                <span className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-foreground/40" aria-hidden />
              </div>

              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
                Quick facts
              </div>
              <dl className="mt-5 divide-y divide-border border-y border-border">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-6 py-3.5">
                    <dt className="text-[13px] text-muted-foreground">{label}</dt>
                    <dd className="text-[13px] text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Reach out for the long version →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
