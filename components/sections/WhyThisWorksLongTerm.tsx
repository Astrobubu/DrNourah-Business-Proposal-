"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyThisWorksLongTermProps {
    data: {
        title: string;
        quote: string;
        benefits: {
            title: string;
            text: string;
        }[];
    };
}

export function WhyThisWorksLongTerm({ data }: WhyThisWorksLongTermProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {data.title}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
                {data.benefits.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/50 hover:bg-white/80 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="w-6 h-6 text-accent-teal flex-shrink-0" />
                            <h3 className="text-xl rtl:text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-lg text-text-muted leading-relaxed pl-9">{item.text}</p>
                    </div>
                ))}
            </div>

            <motion.p
                className="text-center text-2xl font-heading italic text-primary/80 max-w-3xl"
            >
                "{data.quote}"
            </motion.p>
        </section>
    );
}
