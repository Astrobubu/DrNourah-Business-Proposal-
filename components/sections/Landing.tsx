"use client";

import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

interface LandingProps {
    onLanguageSelect: (lang: "en" | "ar") => void;
    data: {
        welcome: string;
        choose: string;
    };
    selectorData: {
        en: string;
        ar: string;
    };
}

export function Landing({ onLanguageSelect, data, selectorData }: LandingProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-5xl flex flex-col items-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 leading-tight">
                    {data.welcome}
                </h1>
                <h1
                    className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 leading-tight"
                    style={{ fontFamily: "'Lateef', serif" }}
                >
                    مرحباً دكتورة نورة
                </h1>

                <LanguageSelector
                    onSelect={onLanguageSelect}
                    data={selectorData}
                />
            </motion.div>
        </section>
    );
}
