interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  number?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-primary/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance text-[1.9rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.3rem] md:text-[2.55rem]">
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
