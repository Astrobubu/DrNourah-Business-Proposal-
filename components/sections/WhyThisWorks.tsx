"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyThisWorksProps {
    data: {
        title: string;
        p1: string;
        p2: string;
        items: string[];
        quote: string;
    };
}

export function WhyThisWorks({ data }: WhyThisWorksProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    {data.title}
                </h2>
                <div className="text-xl md:text-2xl text-text-muted space-y-6 max-w-4xl mx-auto leading-relaxed">
                    <p>{data.p1}</p>
                    <p className="font-bold text-text-main text-3xl">{data.p2}</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {data.items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50"
                    >
                        <CheckCircle2 className="w-8 h-8 text-accent-teal flex-shrink-0" />
                        <span className="text-lg md:text-xl font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
