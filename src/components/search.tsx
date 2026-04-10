"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { searchIndex, SearchItem } from "@/data/search-index";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import Fuse from "fuse.js";
import { cn } from "@/lib/utils";

import { useSearch } from "@/components/search-provider";

export default function Search() {
  const [open, setOpen] = useState(false);
  const { searchQuery: query, setSearchQuery: setQuery } = useSearch();

  const fuse = useMemo(() => new Fuse(searchIndex, {
    keys: ["title", "keywords", "snippet", "number"],
    threshold: 0.35,
    distance: 100,
    ignoreLocation: true,
  }), []);

  const results = useMemo(() => {
    if (!query) return searchIndex;
    return fuse.search(query).map(r => r.item);
  }, [query, fuse]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = useCallback((id: string) => {
    setOpen(false);
    setQuery("");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Apply highlight animation
      el.classList.add("search-highlight");
      setTimeout(() => {
        el.classList.remove("search-highlight");
      }, 3000);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-background/80 backdrop-blur-xl rounded-full shadow-2xl border border-primary/20 hover:border-primary/50 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Tìm kiếm nội dung"
      >
        <svg
          className="w-5 h-5 text-primary group-hover:text-primary transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Tìm kiếm mầu nhiệm, thuật ngữ, hoặc từ khóa..." 
          onValueChange={setQuery}
          value={query}
        />
        <CommandList className="font-serif">
          {query.length > 0 && <CommandEmpty>Không tìm thấy kết quả cho "{query}".</CommandEmpty>}
          
          <CommandGroup heading={query ? `Có ${results.length} kết quả phù hợp` : "Cấu trúc báo cáo nghiên cứu"}>
            {results.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.id)}
                className="flex flex-col items-start gap-1 cursor-pointer py-4 px-5 border-b border-border/5 last:border-0 hover:bg-primary/5 transition-colors group/item"
              >
                <div className="flex items-center gap-3 w-full">
                  {item.number && (
                    <span className="text-[10px] font-black bg-primary/10 text-primary px-1.5 py-0.5 rounded tabular-nums min-w-[2.5rem] text-center group-data-selected/command-item:bg-primary group-data-selected/command-item:text-white transition-colors">
                      {item.number}
                    </span>
                  )}
                  <span className="font-bold text-foreground text-base tracking-tight group-data-selected/command-item:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
                
                {item.snippet && (
                  <p className="text-xs text-muted-foreground/80 line-clamp-1 pl-[3.25rem]">
                    {item.snippet}
                  </p>
                )}
                
                {item.keywords && query && (
                  <div className="flex flex-wrap gap-1 mt-1 pl-[3.25rem]">
                    {item.keywords.slice(0, 4).map(kw => (
                      <span key={kw} className={cn(
                        "text-[9px] px-1.5 py-0.5 rounded-sm border transition-colors",
                        kw.toLowerCase().includes(query.toLowerCase()) 
                          ? "bg-primary/5 text-primary border-primary/20 font-bold" 
                          : "bg-muted/30 text-muted-foreground/50 border-transparent"
                      )}>
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        
        <div className="p-3 border-t border-border/10 bg-muted/20 flex items-center justify-between">
          <p className="text-[10px] text-muted-foreground italic font-serif">
            Hỗ trợ tìm kiếm mờ (Fuzzy Search) cho các thuật ngữ chuyên sâu.
          </p>
          <div className="flex items-center gap-2">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-sans text-[10px] font-medium text-muted-foreground opacity-100 uppercase tracking-tighter">
              ESC
            </kbd>
            <span className="text-[10px] text-muted-foreground">để đóng</span>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}
