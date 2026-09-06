interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  number?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "left", number }: Props) => {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {number && <span className="text-foreground/60">{number}</span>}
        <span className="h-px w-6 bg-border" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tightest text-foreground sm:text-[2.25rem] md:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
