import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/30 border-b border-border/50">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] sepia:opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003DA5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Academic Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 dark:bg-primary/20 sepia:bg-primary/10 border border-primary/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
            Báo cáo Nghiên cứu Chuyên Sâu
          </span>
        </div>

        {/* Top ornament line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hero-ornament flex-1 max-w-[100px] bg-primary/20" />
          <span className="text-secondary text-sm tracking-[0.4em] select-none" aria-hidden="true">
            ✠
          </span>
          <div className="hero-ornament flex-1 max-w-[100px] bg-primary/20" />
        </div>



        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
          Phẩm Giá Con Người
        </h1>
        <p className="font-accent text-2xl md:text-3xl lg:text-4xl italic text-primary/60 mb-10 transition-colors">
          Theo Quan Điểm Kitô Giáo.
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-serif text-xs text-muted-foreground/80 mb-10 transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-gold">📅</span>
            <span>Cập nhật mới nhất: 09 Tháng 4, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">📖</span>
            <span>Thời gian đọc: ~25 phút</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">📍</span>
            <span>Văn kiện Toàn cầu & Bối cảnh Việt Nam</span>
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3 py-1 rounded bg-muted/50 hover:bg-muted text-muted-foreground hover:text-primary transition-all cursor-pointer border border-transparent hover:border-primary/20"
          >
            <span className="text-gold">🖨️</span>
            <span>In / PDF</span>
          </button>
        </div>

        {/* Short description */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -left-4 top-0 text-4xl text-warm-gray select-none">“</div>
          <p className="prose-body text-base md:text-lg leading-relaxed text-foreground/80 italic">
            Từ nền tảng <span className="latin-term">Imago Dei</span> đến các
            thách thức đương đại: AI, Đạo đức Sinh học, và sứ mạng dấn thân tại Việt Nam.
          </p>
          <div className="absolute -right-4 bottom-0 text-4xl text-warm-gray select-none">”</div>
        </div>

        {/* Bottom ornament line */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="hero-ornament flex-1 max-w-[100px]" />
          <span className="text-gold text-sm tracking-[0.4em] select-none" aria-hidden="true">
            ✠
          </span>
          <div className="hero-ornament flex-1 max-w-[100px]" />
        </div>
      </div>
    </header>
  );
}
