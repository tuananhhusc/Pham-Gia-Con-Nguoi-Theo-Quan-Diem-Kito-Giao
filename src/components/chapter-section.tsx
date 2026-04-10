import { ReactNode } from "react";

interface ChapterSectionProps {
  id: string;
  number: string;
  title: string;
  level?: 1 | 2;
  children: ReactNode;
  isFirst?: boolean;
}

export default function ChapterSection({
  id,
  number,
  title,
  level = 1,
  children,
  isFirst = false,
}: ChapterSectionProps) {
  if (level === 2) {
    return (
      <section id={id} className="section-reveal scroll-mt-24 mb-10">
        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-5 flex items-baseline gap-3">
          <span className="text-primary font-bold text-base tabular-nums">
            {number}
          </span>
          <span>{title}</span>
        </h3>
        <div className="prose-body space-y-5">{children}</div>
      </section>
    );
  }

  return (
    <section id={id} className="section-reveal scroll-mt-24 mb-14">
      <div className="flex items-center gap-4 mb-8">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm shrink-0">
          {number}
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">
          {title}
        </h2>
      </div>
      <div className={`prose-body space-y-5 ${isFirst ? "drop-cap" : ""}`}>
        {children}
      </div>
    </section>
  );
}
