"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Landing } from "@/components/sections/Landing";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeNoticed } from "@/components/sections/WhatWeNoticed";
import { WhyCreatorsDontMonetize } from "@/components/sections/WhyCreatorsDontMonetize";
import { PartnershipModel } from "@/components/sections/PartnershipModel";
import { ProductIdeas } from "@/components/sections/ProductIdeas";
import { ValidationSystem } from "@/components/sections/ValidationSystem";
import { BuildProcess } from "@/components/sections/BuildProcess";
import { RevenueProjections } from "@/components/sections/RevenueProjections";
import { WhyThisWorksLongTerm } from "@/components/sections/WhyThisWorksLongTerm";
import { NextSteps } from "@/components/sections/NextSteps";
import { translations } from "@/lib/translations";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar" | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleLanguageSelect = (lang: "en" | "ar") => {
    setLanguage(lang);

    // Fade out body to hide RTL flip
    document.body.style.transition = "opacity 0.2s ease-out";
    document.body.style.opacity = "0";

    // Change direction while hidden, then fade back in
    setTimeout(() => {
      if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        document.body.classList.add("rtl");
      } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
        document.body.classList.remove("rtl");
      }

      // Fade back in
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 50);
    }, 200); // Wait for fade out

    // Auto-advance to next slide after selection
    setSlideIndex(1);
  };





  const t = language ? translations[language] : translations["en"];

  // 11 Slides Total (0-10)
  // 0: Landing
  // 1: WhoWeAre
  // 2: WhatWeNoticed
  // 3: WhyCreatorsDontMonetize
  // 4: PartnershipModel
  // 5: ProductIdeas
  // 6: ValidationSystem
  // 7: BuildProcess
  // 8: RevenueProjections
  // 9: WhyThisWorksLongTerm
  // 10: NextSteps

  const nextSlide = () => {
    if (slideIndex < 10) setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  return (
    <main className="min-h-screen relative overflow-hidden font-body text-text-main flex flex-col">
      <AnimatedBackground />

      {/* Main Content Area */}
      <div className="flex-grow relative">
        <AnimatePresence mode="wait">
          {slideIndex === 0 && (
            <motion.div key="slide-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0">
              <Landing
                onLanguageSelect={handleLanguageSelect}
                data={translations["en"].landing}
                selectorData={translations["en"].languageSelector}
              />
            </motion.div>
          )}

          {slideIndex === 1 && (
            <motion.div key="slide-1" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <WhoWeAre data={t.whoWeAre} />
            </motion.div>
          )}

          {slideIndex === 2 && (
            <motion.div key="slide-2" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <WhatWeNoticed data={t.whatWeNoticed} />
            </motion.div>
          )}

          {slideIndex === 3 && (
            <motion.div key="slide-3" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <WhyCreatorsDontMonetize data={t.roadblocks} />
            </motion.div>
          )}

          {slideIndex === 4 && (
            <motion.div key="slide-4" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <PartnershipModel data={t.partnership} />
            </motion.div>
          )}

          {slideIndex === 5 && (
            <motion.div key="slide-5" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <ProductIdeas data={t.productIdeas} />
            </motion.div>
          )}

          {slideIndex === 6 && (
            <motion.div key="slide-6" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <ValidationSystem data={t.validation} />
            </motion.div>
          )}

          {slideIndex === 7 && (
            <motion.div key="slide-7" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <BuildProcess data={t.process} />
            </motion.div>
          )}

          {slideIndex === 8 && (
            <motion.div key="slide-8" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <RevenueProjections data={t.projections} />
            </motion.div>
          )}

          {slideIndex === 9 && (
            <motion.div key="slide-9" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <WhyThisWorksLongTerm data={t.longTerm} />
            </motion.div>
          )}

          {slideIndex === 10 && (
            <motion.div key="slide-10" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 overflow-y-auto no-scrollbar">
              <NextSteps data={t.nextSteps} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {slideIndex > 0 && slideIndex < 10 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-12 px-8 md:px-12 w-full max-w-7xl mx-auto left-0 right-0 z-50 flex items-center justify-between pointer-events-none"
        >
          {/* Back Button (Icon Only, Left) */}
          <div className="pointer-events-auto">
            {slideIndex > 0 ? (
              <button
                onClick={prevSlide}
                className="bg-white/80 backdrop-blur text-text-main w-12 h-12 rounded-full shadow-lg hover:bg-white transition-all flex items-center justify-center border border-gray-200 group"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5 rtl:rotate-180 text-gray-600 group-hover:text-primary" />
              </button>
            ) : <div className="w-12" /> /* Spacer to keep layout balanced if needed, or just let justify-between handle it */}
          </div>

          {/* Next Button (Right) */}
          <button
            onClick={nextSlide}
            className="pointer-events-auto bg-primary text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
          >
            {t.navigation.next}
            <ArrowRight className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-accent-teal" />
          </button>
        </motion.div>
      )}

      {/* Progress Dots */}
      {slideIndex > 0 && (
        <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? "w-8 bg-accent-teal" : "w-2 bg-gray-200"}`}
            />
          ))}
        </div>
      )}
    </main>
  );
}
