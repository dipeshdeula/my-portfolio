import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { ArrowUpRight, X } from "lucide-react";
import { whatsappLink } from "@/constant/socialLink";

const WhatsAppPopper = () => {
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Popper Card (No phone number displayed in UI) */}
      {open && (
        <div className="w-[270px] origin-bottom-right animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <div className="flex items-center justify-between bg-[#16a34a] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <FaWhatsapp className="h-5 w-5" />
              <div>
                <div className="text-[13px] font-semibold leading-tight">Dipesh Deula</div>
                <div className="text-[11px] text-white/85">Available on WhatsApp</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat preview"
              className="rounded-md p-1 text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4">
            <p className="text-[12.5px] leading-relaxed text-muted-foreground">
              Looking for a Full-Stack Developer or have a project in mind? Let's connect directly.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#15803d]"
            >
              <FaWhatsapp className="h-4 w-4" />
              Message on WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button + X Dismiss Icon */}
      <div className="group relative inline-flex items-center">
        {/* X icon to dismiss/remove the floating WhatsApp widget if user wants */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          aria-label="Dismiss WhatsApp button"
          title="Hide WhatsApp button"
          className="absolute -right-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:scale-110 hover:text-foreground"
        >
          <X className="h-3 w-3" />
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat on WhatsApp"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-elevated transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <FaWhatsapp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppPopper;
