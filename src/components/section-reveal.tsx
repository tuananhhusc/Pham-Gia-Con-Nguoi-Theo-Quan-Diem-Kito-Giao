"use client";

import { useEffect } from "react";

export default function SectionReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".section-reveal");
    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return null;
}
