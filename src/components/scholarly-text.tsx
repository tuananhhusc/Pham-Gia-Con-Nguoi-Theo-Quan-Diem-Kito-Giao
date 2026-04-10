"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { citations } from "@/data/citations";

import { useSearch } from "@/components/search-provider";

export default function ScholarlyText({ children }: { children: string | React.ReactNode }) {
  const { searchQuery } = useSearch();
  
  if (typeof children !== "string") return <>{children}</>;

  // 1. Process Citations
  const citationParts = children.split(/(\.\d+|\d+)/g);
  
  const processedCitations = citationParts.map((part, i) => {
    const match = part.match(/^(\.)?(\d{1,2})$/);
    if (match) {
      const numStr = match[2];
      const num = parseInt(numStr, 10);
      const hasDot = match[1] === ".";
      const citationData = citations.find(c => c.id === num);

      return (
        <span key={`cite-${i}`}>
          {hasDot && "."}
          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  href="#nguon-trich-dan"
                  className="citation-sup"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("nguon-trich-dan");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              }
            >
              {numStr}
            </TooltipTrigger>
            {citationData && (
              <TooltipContent className="max-w-[300px] p-3 text-sm font-serif leading-relaxed bg-card text-foreground border-border shadow-md">
                <p className="font-bold mb-1 text-primary">[{numStr}]</p>
                <p>{citationData.text}</p>
                <p className="mt-2 text-xs opacity-70 break-all text-muted-foreground">{new URL(citationData.url).hostname}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </span>
      );
    }
    return part;
  });

  // 2. Process Highlight (if searchQuery is significant)
  if (!searchQuery || searchQuery.length < 2) return <>{processedCitations}</>;

  return (
    <>
      {processedCitations.map((item, idx) => {
        if (typeof item !== "string") return <React.Fragment key={idx}>{item}</React.Fragment>;
        
        // Search and highlight in text parts
        const regex = new RegExp(`(${searchQuery})`, "gi");
        const highlightParts = item.split(regex);
        
        return (
          <React.Fragment key={idx}>
            {highlightParts.map((hPart, hIdx) => 
              hPart.toLowerCase() === searchQuery.toLowerCase() ? (
                <mark key={hIdx} className="bg-primary/20 text-primary font-bold rounded-sm px-0.5">
                  {hPart}
                </mark>
              ) : hPart
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
