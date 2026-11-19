import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { githubLink, linkedinLink, whatsappLink } from "@/constant/socialLink";
import discussionImg from "@/assets/images/discussion.png";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" aria-hidden />
      <div className="container relative">
        {/* Full-bleed Collaboration Image Background with Centered Content */}
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-elevated">
          {/* Background Image (discussion.png) */}
          <div className="absolute inset-0">
            <img
              src={discussionImg}
              alt="Dipesh Deula collaborating on software engineering projects"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/50 to-slate-950/65" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/20" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:px-10 md:py-24">
            {/* Clean Eyebrow */}
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary" />
              <span>Collaboration & Roles</span>
              <span className="h-px w-6 bg-primary" />
            </div>

            {/* Centered Headline */}
            <h2 className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.65rem] md:text-[3.15rem]">
              Have a great project idea or role?{" "}<br/>
              <span className="bg-primary bg-clip-text text-transparent">
                Let's work together.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-pretty text-[15.5px] leading-relaxed text-white/85 sm:text-[16.5px]">
              Actively seeking full-time software engineering roles, project lead developer
              opportunities, and product collaborations.
            </p>

            {/* Primary Centered CTAs (No phone number displayed in text) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:deulatech@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-[14.5px] font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-primary-hover"
              >
                <Mail className="h-4 w-4" />
                hello@dipeshdeula.dev
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#16a34a] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-[#15803d]"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Clean Unboxed Direct Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/15 pt-7 text-[13px] font-medium text-white/85">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <FaGithub className="h-4 w-4 text-primary" aria-hidden />
                <span>@dipeshdeula</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
              </a>

              <span className="h-3.5 w-px bg-white/20" aria-hidden />

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <FaLinkedinIn className="h-4 w-4 text-primary" aria-hidden />
                <span>in/dipeshdeula</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
              </a>

              <span className="h-3.5 w-px bg-white/20" aria-hidden />

              <div className="inline-flex items-center gap-2 text-white/85">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hetauda, Nepal · Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
