"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Monitor, Hammer } from "lucide-react";

interface WhoWeAreProps {
    data: {
        title: string;
        subtitle: string;
        description: string;
        bullets: string[];
        mufakkir: {
            caption: string;
        };
    };
}

export function WhoWeAre({ data }: WhoWeAreProps) {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                {/* Left: Branding & Visual */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-accent-teal/20 to-accent-coral/20 rounded-3xl blur-2xl transform rotate-2" />
                    <a href="https://mufakkir.app" target="_blank" rel="noopener noreferrer" className="block">
                        <GlassCard className="relative p-2 border-white/40 bg-white/50 backdrop-blur-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-sm">
                                <img
                                    src="/mufakkir_preview.png"
                                    alt="Mufakkir App Preview"
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-4 bg-white/80 backdrop-blur-sm">
                                <p className="text-sm font-medium text-primary text-center italic">{data.mufakkir.caption}</p>
                            </div>
                        </GlassCard>
                    </a>
                </div>

                {/* Right: Copy */}
                <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                    <a href="https://constantlabs.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-sm shadow-sm backdrop-blur-md hover:bg-primary/10 transition-colors">
                        <Code2 className="w-4 h-4 text-accent-teal" />
                        <span>Constant Labs</span>
                    </a>

                    <h2 className="text-3xl md:text-7xl font-bold leading-tight text-gray-900 font-heading">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">
                            {data.title}
                        </span>
                    </h2>

                    <h3 className="text-2xl md:text-3xl text-accent-coral font-heading">
                        {data.subtitle}
                    </h3>

                    <p className="text-lg text-gray-00 leading-relaxed">
                        {data.description}
                    </p>

                    <div className="space-y-4">
                        {data.bullets.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal shadow-inner">
                                    <Hammer className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
