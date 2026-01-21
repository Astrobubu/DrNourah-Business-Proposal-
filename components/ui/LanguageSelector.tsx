"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
    onSelect: (lang: "en" | "ar") => void;
    className?: string;
    data: {
        en: string; // "English" or label
        ar: string; // "Arabic" or label
    };
}

export function LanguageSelector({ onSelect, className, data }: LanguageSelectorProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl", className)}>
            {/* English Selection */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect("en")}
                className="group relative overflow-hidden rounded-3xl bg-white/80 border border-gray-100 p-12 text-left shadow-lg transition-all hover:bg-white hover:shadow-xl hover:border-primary/20 cursor-pointer flex flex-col items-center justify-center gap-4 h-[300px]"
            >
                <span className="text-xl text-text-muted font-medium uppercase tracking-widest">Select Language</span>
                <span className="text-5xl font-bold font-heading text-primary group-hover:scale-110 transition-transform duration-500">English</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.button>

            {/* Arabic Selection - Force Arabic fonts inline */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect("ar")}
                className="group relative overflow-hidden rounded-3xl bg-white/80 border border-gray-100 p-12 text-right shadow-lg transition-all hover:bg-white hover:shadow-xl hover:border-secondary/20 cursor-pointer flex flex-col items-center justify-center gap-4 h-[300px]"
                dir="rtl"
                style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
                <span
                    className="text-xl text-text-muted font-medium"
                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                >
                    اختر اللغة
                </span>
                <span
                    className="text-6xl font-bold text-secondary group-hover:scale-110 transition-transform duration-500"
                    style={{ fontFamily: "'Lateef', serif" }}
                >
                    العربية
                </span>
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.button>
        </div>
    );
}
