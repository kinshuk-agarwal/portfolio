"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/20">
      <div
        ref={containerRef}
        className="h-[500vh] w-full relative"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />

          {/* Smooth bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-b from-transparent to-[#121212] z-20 pointer-events-none" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col pt-10 bg-[#121212]">
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>

      <footer className="py-12 text-center border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <p className="text-neutral-400">© 2026 Kinshuk Agarwal.</p>
          <p className="text-neutral-500 text-sm mt-2 tracking-widest uppercase">
            Built with intent. Engineered for scale.
          </p>
        </div>
      </footer>
    </main>
  );
}
