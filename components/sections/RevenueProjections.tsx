"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface RevenueProjectionsProps {
    data: {
        title: string;
        subtitle: string;
        insight: string;
        scenarios: {
            title: string;
            metric: string;
            revenue: string;
            desc: string;
        }[];
    };
}

export function RevenueProjections({ data }: RevenueProjectionsProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-12">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading">{data.title}</h2>
                <p className="text-2xl text-text-muted max-w-3xl mx-auto">
                    {data.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {data.scenarios.map((scenario, index) => {
                    // Highlight scale scenario
                    const isScale = index === 2;
                    return (
                        <GlassCard
                            key={index}
                            className={`flex flex-col items-center text-center py-10 px-6 ${isScale ? 'border-primary/40 bg-primary/5' : ''}`}
                            hoverEffect={true}
                        >
                            <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">{scenario.title}</span>
                            <span className="text-4xl font-bold text-gray-900 mb-2">{scenario.metric}</span>
                            <span className="text-3xl font-bold text-primary mb-6" dir="ltr">{scenario.revenue}</span>

                            <div className="mt-auto pt-6 border-t border-gray-200/50 w-full">
                                <p className="text-base text-text-muted">{scenario.desc}</p>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>

            <GlassCard className="bg-accent-teal/10 border-accent-teal/20 mx-auto max-w-4xl text-center p-8">
                <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed">
                    "{data.insight}"
                </p>
            </GlassCard>
        </section>
    );
}
