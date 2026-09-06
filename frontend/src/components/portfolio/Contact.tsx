import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" aria-hidden />
      <div className="container relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
              <span className="text-foreground/60">05</span>
              <span className="h-px w-6 bg-border" />
              Contact
            </div>
            <h2 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.08] tracking-tightest text-foreground sm:text-[2.5rem] md:text-[3rem]">
              Have a project in mind, or a role I should know about?{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                Let's talk.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              I'm open to full-time roles, contract engagements, and interesting collaborations.
              Email is the fastest way to reach me — I usually reply within a day.
            </p>

            <a
              href="mailto:hello@dipeshdeula.dev"
              className="group mt-10 inline-flex items-center gap-3 text-[1.5rem] font-medium tracking-tight text-foreground transition-colors hover:text-primary sm:text-[1.85rem]"
            >
              hello@dipeshdeula.dev
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <aside className="lg:col-span-5">
            {/* Framed supporting image */}
            <div className="relative mb-8 rounded-[12px] border border-border/80 bg-surface/40 p-2 shadow-soft">
              <div className="relative overflow-hidden rounded-[6px] border border-border/60">
                <div className="aspect-[16/9] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"
                    alt="Colorful code on a dark monitor — engineering workspace"
                    className="h-full w-full object-cover grayscale-[10%] contrast-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(var(--background) / 0) 55%, hsl(var(--background) / 0.55) 100%)",
                  }}
                  aria-hidden
                />
              </div>
              <span className="pointer-events-none absolute -left-1 -top-1 h-2.5 w-2.5 border-l border-t border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 border-r border-t border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b border-l border-foreground/40" aria-hidden />
              <span className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-foreground/40" aria-hidden />
            </div>

            <div className="flex flex-col divide-y divide-border border-y border-border">
              <a
                href="mailto:hello@dipeshdeula.dev"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-primary"
              >
                <span className="inline-flex items-center gap-3 text-[14px] text-foreground">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email
                </span>
                <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors group-hover:text-primary">
                  hello@dipeshdeula.dev
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-foreground"
              >
                <span className="inline-flex items-center gap-3 text-[14px] text-foreground">
                  <FaGithub className="h-4 w-4 text-muted-foreground" aria-hidden />
                  GitHub
                </span>
                <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                  @dipeshdeula
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-foreground"
              >
                <span className="inline-flex items-center gap-3 text-[14px] text-foreground">
                  <FaLinkedinIn className="h-4 w-4 text-muted-foreground" aria-hidden />
                  LinkedIn
                </span>
                <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                  in/dipeshdeula
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-[12px] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Currently available · Replies within 24h
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
