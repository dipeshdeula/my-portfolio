import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { githubLink, linkedinLink, whatsappLink } from "@/constant/socialLink";
import InfinityMark from "./InfinityMark";

const formatNepalDateTime = (date: Date) => {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kathmandu",
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  } catch {
    return date.toLocaleString();
  }
};

const Footer = () => {
  const [nepalTime, setNepalTime] = useState<string>(() => formatNepalDateTime(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNepalTime(formatNepalDateTime(new Date()));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3.5">
            <InfinityMark size={42} strokeWidth={1.8} className="text-foreground" />
            <div>
              <div className="text-[13.5px] font-semibold tracking-tight text-foreground">
                Dipesh Deula
              </div>
              <div className="text-[12px] text-muted-foreground">
                Project Lead Developer · Full-Stack Engineer
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaGithub className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaLinkedinIn className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-1 grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <div className="inline-flex items-center gap-2.5">
            <span>© {new Date().getFullYear()}</span>
            <span>All rights reserved.</span>
          </div>

          <p className="font-mono text-[11.5px] text-muted-foreground">
            Nepal · {nepalTime}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
