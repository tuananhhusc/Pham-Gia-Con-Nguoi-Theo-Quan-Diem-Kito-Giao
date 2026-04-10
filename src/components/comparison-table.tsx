import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  criteria: string;
  cells: React.ReactNode[];
}

interface ComparisonTableProps {
  title: string;
  columnHeaders: string[];
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  title,
  columnHeaders,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="my-16 relative w-full xl:w-[calc(100%+8rem)] xl:-ml-16 group/table max-w-[1200px] mx-auto xl:mx-0">
      <div className="absolute -top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-heading text-lg md:text-xl font-bold text-navy dark:text-gold-light/90 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-charcoal/60 dark:text-silver/60 mt-1 font-serif italic">
            So sánh chi tiết các truyền thống (Kéo ngang nếu cần)
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-montserrat font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 self-start md:self-center">
          Dữ liệu chuyên sâu
        </div>
      </div>

      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden shadow-xl shadow-navy/5">
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/60">
          <Table className="comparison-table w-full border-collapse">
            <TableHeader className="hidden md:table-header-group">
              <TableRow className="border-b border-border/50 hover:bg-transparent bg-primary/5 font-heading">
                {columnHeaders.map((header, i) => (
                  <TableHead
                    key={i}
                    className="px-6 py-4 text-xs font-extrabold text-navy dark:text-gold-light border-r border-border/10 last:border-r-0 align-bottom text-center"
                  >
                    <div className="relative inline-block pb-1.5">
                      <span className="uppercase tracking-widest">{header}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/60 rounded-full" />
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <React.Fragment key={i}>
                  {/* Criteria Section Header Row */}
                  <TableRow className="bg-primary/[0.03] border-y border-border/40">
                    <TableCell 
                      colSpan={columnHeaders.length} 
                      className="px-4 py-3 md:py-4 font-serif text-[12px] md:text-[13px] uppercase tracking-[0.25em] font-bold text-primary dark:text-gold-light/80 text-center select-none"
                    >
                      <span className="flex items-center justify-center gap-3 before:h-px before:flex-1 before:bg-gradient-to-l before:from-primary/20 after:h-px after:flex-1 after:bg-gradient-to-r after:from-primary/20">
                        {row.criteria}
                      </span>
                    </TableCell>
                  </TableRow>

                  {/* Desktop Content Row - Only visible from md up */}
                  <TableRow 
                    className={cn(
                      "hidden md:table-row border-b border-border/20 group/row transition-all duration-300 hover:bg-primary/[0.01] dark:hover:bg-primary/5"
                    )}
                  >
                    {row.cells.map((cell, j) => (
                      <TableCell
                        key={j}
                        className="px-6 py-8 font-serif text-[14px] md:text-[15px] leading-[1.7] border-r border-border/10 last:border-r-0 text-foreground/90 dark:text-silver group-hover/row:text-foreground transition-colors align-top w-1/3"
                      >
                        <div className="whitespace-normal hyphens-auto text-justify tracking-tight">
                          {cell}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Mobile Stacked View - Only visible below md */}
                  <TableRow className="md:hidden border-b border-border/10">
                    <TableCell colSpan={columnHeaders.length} className="p-0">
                      <div className="flex flex-col">
                        {row.cells.map((cell, j) => (
                          <div 
                            key={j} 
                            className={cn(
                              "px-5 py-7 space-y-3 border-b border-border/10 last:border-b-0",
                              j % 2 === 0 ? "bg-white/40 dark:bg-transparent" : "bg-muted/5 dark:bg-white/[0.02]"
                            )}
                          >
                            <span className="text-[11px] uppercase tracking-[0.2em] font-black text-primary/70 dark:text-gold-light/60">
                              {columnHeaders[j]}
                            </span>
                            <div className="font-serif text-[15px] leading-relaxed text-foreground/90 dark:text-silver/90 text-justify">
                              {cell}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <div className="absolute -bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
