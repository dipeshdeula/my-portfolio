import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import InfinityMark from "./InfinityMark";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <InfinityMark size={26} className="text-foreground" animated={false} />
            <div>
              <div className="text-[13px] font-medium text-foreground">Dipesh Deula</div>
              <div className="text-[12px] text-muted-foreground">
                Full-stack developer · Software engineer
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <FaGithub className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="https://linkedin.com/"
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
          <p>© {new Date().getFullYear()} Dipesh Deula. All rights reserved.</p>
          <p>Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
