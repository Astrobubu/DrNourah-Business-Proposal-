"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Clock, Code, AlertTriangle, Star } from "lucide-react";

interface WhyCreatorsDontMonetizeProps {
    data: {
        title: string;
        subtitle: string;
        cards: {
            title: string;
            text: string;
        }[];
    };
}

const icons = [Clock, Code, AlertTriangle, Star];
const colors = ["text-blue-500", "text-purple-500", "text-orange-500", "text-teal-500"];
const bgs = ["bg-blue-50", "bg-purple-50", "bg-orange-50", "bg-teal-50"];

export function WhyCreatorsDontMonetize({ data }: WhyCreatorsDontMonetizeProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight font-heading">
                    {data.title}
                </h2>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    {data.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {data.cards.map((card, i) => {
                    const Icon = icons[i];
                    return (
                        <GlassCard key={i} className="p-8 hover:bg-white/90 transition-colors" hoverEffect={true}>
                            <div className={`w-12 h-12 rounded-xl ${bgs[i]} flex items-center justify-center mb-6`}>
                                <Icon className={`w-6 h-6 ${colors[i]}`} />
                            </div>
                            <h3 className="text-2xl rtl:text-4xl font-bold mb-3 text-gray-900 font-heading">{card.title}</h3>
                            <p className="text-lg text-text-muted leading-relaxed">
                                {card.text}
                            </p>
                        </GlassCard>
                    );
                })}
            </div>
        </section>
    );
}
