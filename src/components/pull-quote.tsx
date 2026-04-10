import React from "react";
import { cn } from "@/lib/utils";

interface PullQuoteProps {
  quote: string;
  author?: string;
  className?: string;
  align?: "left" | "right" | "center";
}

export default function PullQuote({ quote, author, className, align = "center" }: PullQuoteProps) {
  return (
    <figure 
      className={cn(
        "my-12 py-8 relative group",
        align === "center" ? "text-center px-6" : "md:w-1/2 px-8",
        align === "right" ? "md:float-right md:ml-8" : align === "left" ? "md:float-left md:mr-8" : "mx-auto",
        className
      )}
    >
      {/* Decorative ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <blockquote className="relative">
        {/* Large stylized quote mark */}
        <span className="absolute -top-6 -left-2 text-7xl font-serif text-primary/10 select-none group-hover:text-primary/20 transition-colors italic">“</span>
        
        <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-navy dark:text-gold-light tracking-tight italic">
          {quote}
        </p>

        {author && (
          <figcaption className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-primary/40" />
            <span className="font-accent text-sm md:text-base text-primary/70 italic">
              {author}
            </span>
            <span className="h-px w-6 bg-primary/40" />
          </figcaption>
        )}
      </blockquote>
    </figure>
  );
}
