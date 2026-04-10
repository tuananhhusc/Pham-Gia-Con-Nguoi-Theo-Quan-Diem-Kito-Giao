"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import TableOfContents from "@/components/table-of-contents";
import ChapterSection from "@/components/chapter-section";
import ChapterDivider from "@/components/chapter-divider";
import ComparisonTable from "@/components/comparison-table";
import CitationList from "@/components/citation-list";
import ScrollToTop from "@/components/scroll-to-top";
import SectionReveal from "@/components/section-reveal";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { citations } from "@/data/citations";

import ContentBody from "@/components/content-body";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <SectionReveal />
      
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 py-12 relative flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
        <TableOfContents />
        <ContentBody />
      </main>
      
      <Footer />
    </>
  );
}
