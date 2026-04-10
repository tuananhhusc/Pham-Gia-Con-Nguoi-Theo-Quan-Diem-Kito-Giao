"use client";

import { useEffect, useState, useCallback } from "react";
import { tocItems } from "@/data/toc";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the topmost visible section
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(id);
        setMobileOpen(false);
      }
    },
    []
  );

  return (
    <>
      {/* Mobile TOC toggle */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50 animate-bounce-subtle print:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 bg-primary/90 backdrop-blur-md text-primary-foreground px-5 py-3.5 rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all font-heading text-sm font-bold border border-white/20 active:scale-95"
          aria-label="Mở mục lục"
        >
          <div className="flex flex-col gap-1 w-4">
            <div className="h-0.5 w-full bg-current rounded-full" />
            <div className={`h-0.5 bg-current rounded-full transition-all ${mobileOpen ? 'w-full' : 'w-2/3'}`} />
            <div className="h-0.5 w-full bg-current rounded-full" />
          </div>
          Mục lục
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* TOC sidebar */}
      <aside
        className={`
          fixed z-50
          xl:sticky xl:top-24 xl:z-10
          ${mobileOpen ? "bottom-0 right-0 left-0 translate-y-0" : "translate-y-full xl:translate-y-0"}
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          xl:transition-none
          bg-background/95 backdrop-blur-xl xl:bg-transparent
          rounded-t-[2.5rem] xl:rounded-none
          shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)] xl:shadow-none
          max-h-[80vh] xl:max-h-[calc(100vh-7rem)]
          xl:w-[280px] xl:shrink-0
          print:hidden
        `}
      >
        {/* Mobile handle bar and close indicator */}
        <div className="xl:hidden flex flex-col items-center pt-4 pb-2">
          <div className="w-12 h-1.5 rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/40 transition-colors cursor-pointer" onClick={() => setMobileOpen(false)} />
        </div>

        <div className="px-6 pt-4 pb-8 xl:px-0 xl:pt-0 xl:pb-0">
          <div className="flex items-center justify-between mb-6 xl:mb-4">
            <p className="font-heading text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary/70">
              Mục lục nghiên cứu
            </p>
            <button 
              className="xl:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ScrollArea className="h-[60vh] xl:h-[calc(100vh-10rem)] custom-scrollbar">
            <nav aria-label="Mục lục bài viết">
              <ul className="space-y-1 pr-4">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`
                        toc-link block py-2.5 font-serif transition-all duration-300
                        ${item.level === 2 ? "pl-10 text-[13px] opacity-75" : "pl-4 text-[15px] font-semibold text-charcoal/90 dark:text-silver/90"}
                        ${
                          activeId === item.id
                            ? "active text-primary bg-primary/[0.03] dark:bg-primary/5 rounded-r-xl border-l-2 border-primary"
                            : "text-muted-foreground hover:text-primary hover:pl-5"
                        }
                      `}
                    >
                      {item.number && (
                        <span className="font-bold mr-2 tabular-nums text-primary/80">
                          {item.number}
                        </span>
                      )}
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollArea>
        </div>
      </aside>
    </>
  );
}
