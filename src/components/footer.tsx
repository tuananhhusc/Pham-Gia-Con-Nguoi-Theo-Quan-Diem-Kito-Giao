export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border bg-gradient-to-b from-background to-muted/20">
      {/* Gold top accent */}
      <div className="hero-ornament w-full" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent/30" />
          <span className="text-accent text-sm select-none" aria-hidden="true">✦</span>
          <div className="h-px w-8 bg-accent/30" />
        </div>

        {/* Title */}
        <p className="font-heading text-sm font-semibold tracking-wide text-foreground/80 mb-2">
          Phẩm Giá Con Người Theo Quan Điểm Kitô Giáo.
        </p>
        <p className="font-serif text-sm text-muted-foreground mb-4">
          Báo cáo Nghiên cứu Toàn diện
        </p>

        {/* Divider */}
        <div className="h-px w-16 mx-auto bg-border mb-4" />

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {currentYear} · Nghiên Cứu Chuyên Sâu · Được Xây Dựng Với{" "}
          <span className="text-destructive" aria-label="tình yêu">♥</span> Cho
          Sự Thật Và Phẩm Giá
        </p>

        {/* Latin quote */}
        <p className="mt-4 font-accent italic text-xs text-primary/60 tracking-wide">
          &ldquo;Dignitas hominis in Imagine Dei fundatur&rdquo;
        </p>
      </div>
    </footer>
  );
}
