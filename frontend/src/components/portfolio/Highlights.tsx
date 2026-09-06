const items = [
  { label: "Full-Stack Development", value: "End-to-end" },
  { label: "Clean Architecture", value: "Maintainable" },
  { label: "Performance-Focused", value: "Measured" },
  { label: "Product-Oriented", value: "Outcomes" },
];

const Highlights = () => {
  return (
    <section aria-label="Highlights" className="border-y border-border bg-surface/30">
      <div className="container">
        <ul className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-1 px-5 py-6 md:px-7 md:py-7"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {item.value}
              </span>
              <span className="text-[14px] text-foreground/95">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
