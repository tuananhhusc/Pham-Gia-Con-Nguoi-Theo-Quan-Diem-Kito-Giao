import { citations } from "@/data/citations";

export default function CitationList() {
  return (
    <section id="nguon-trich-dan" className="scroll-mt-24 mt-16">
      <div className="flex items-center gap-4 mb-8">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10 text-foreground font-heading font-bold text-sm shrink-0">
          ※
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
          Nguồn trích dẫn
        </h2>
      </div>

      <div className="bg-muted/10 rounded-lg border border-border/50 p-6 md:p-8">
        <ol className="space-y-2">
          {citations.map((citation) => (
            <li key={citation.id} className="citation-item flex gap-3 text-sm">
              <span className="font-heading text-xs font-bold text-muted-foreground tabular-nums shrink-0 pt-0.5 w-6 text-right">
                {citation.id}.
              </span>
              <span className="font-serif text-foreground/90 leading-relaxed">
                {citation.text}.{" "}
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="citation-link text-xs break-all"
                >
                  [{new URL(citation.url).hostname}]
                </a>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
