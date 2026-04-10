import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro, Lora, Montserrat, Playfair_Display, Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const crimsonPro = Crimson_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-crimson",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nghiencuuthanhoc.vn"), // Thay bằng tên miền thực tế của bạn
  title:
    "Phẩm Giá Con Người Theo Quan Điểm Kitô Giáo. | Báo cáo Nghiên cứu Toàn diện",
  description:
    "Nghiên cứu toàn diện về phẩm giá con người (Imago Dei) qua lăng kính Kitô giáo: Công giáo, Chính thống giáo và Tin Lành. Phân tích các thách thức đương đại từ AI, đạo đức sinh học đến bối cảnh Việt Nam.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Phẩm giá con người",
    "Imago Dei",
    "Thần học Kitô giáo",
    "Công giáo",
    "Chính thống giáo",
    "Tin Lành",
    "Đạo đức sinh học",
    "AI và Thần học",
    "Phẩm giá người Việt",
  ],
  authors: [{ name: "Nghiên cứu Chuyên Sâu" }],
  openGraph: {
    title: "Phẩm Giá Con Người Theo Quan Điểm Kitô Giáo.",
    description:
      "Báo cáo nghiên cứu toàn diện về phẩm giá con người qua lăng kính thần học Kitô giáo. Một công trình đối chiếu Công giáo, Chính thống và Tin Lành.",
    type: "article",
    url: "/",
    siteName: "Nghiên Cứu Chuyên Sâu",
    locale: "vi_VN",
    images: [
      {
        url: "/imago_dei_diagram.png", // Sử dụng chính sơ đồ chính xác chúng ta vừa tạo
        width: 1200,
        height: 630,
        alt: "Sơ đồ Thần học Imago Dei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phẩm Giá Con Người Theo Quan Điểm Kitô Giáo.",
    description:
      "Nghiên cứu sâu sắc về nhân phẩm từ nền tảng Imago Dei đến các thách thức công nghệ hiện đại.",
    images: ["/imago_dei_diagram.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { SearchProvider } from "@/components/search-provider";
import ReadingProgress from "@/components/reading-progress";
import Search from "@/components/search";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn(
        crimsonPro.variable,
        lora.variable,
        merriweather.variable,
        montserrat.variable,
        playfairDisplay.variable,
        "scroll-smooth"
      )}
    >
      <body className="font-crimson selection:bg-gold-light selection:text-navy transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              "headline": "Phẩm Giá Con Người Theo Quan Điểm Kitô Giáo.",
              "description": "Báo cáo nghiên cứu toàn diện về phẩm giá con người (Imago Dei) qua lăng kính Kitô giáo: Công giáo, Chính thống giáo và Tin Lành.",
              "author": {
                "@type": "Person",
                "name": "Nghiên cứu Thần học"
              },
              "datePublished": "2026-04-09",
              "publisher": {
                "@type": "Organization",
                "name": "Catholic Theological Studies"
              }
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          themes={["light", "dark", "sepia"]}
        >
          <TooltipProvider delay={300}>
            <SearchProvider>
              <ReadingProgress />
              {children}
              <Search />
            </SearchProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

