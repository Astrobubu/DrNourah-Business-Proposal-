"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search } from "lucide-react";

interface WhatWeNoticedProps {
    data: {
        title: string;
        p1: string;
        p2: string;
        insight: string;
    };
}

export function WhatWeNoticed({ data }: WhatWeNoticedProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-4xl mx-auto py-12 md:py-20 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-accent-coral/10 rounded-full flex items-center justify-center text-accent-coral mb-6 md:mb-8"
            >
                <Search className="w-10 h-10" />
            </motion.div>

            <h2 className="text-3xl md:text-7xl font-bold mb-8 md:mb-10 text-gray-900 font-heading">
                {data.title}
            </h2>

            <div className="space-y-6 text-xl md:text-2xl text-text-muted leading-relaxed max-w-3xl mb-12">
                <p>{data.p1}</p>
                <p className="font-bold text-gray-800">{data.p2}</p>
            </div>

            <GlassCard className="bg-accent-teal/5 border-accent-teal/20 p-8 md:p-10 w-full max-w-3xl">
                <p className="text-2xl md:text-3xl font-bold text-accent-teal leading-tight">
                    "{data.insight}"
                </p>
            </GlassCard>
        </section>
    );
}
