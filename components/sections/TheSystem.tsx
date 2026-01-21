"use client";

import { motion } from "framer-motion";
import { Search, Bell, Users, Rocket, TrendingUp } from "lucide-react";

interface TheSystemProps {
    data: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
        }[];
    };
}

const icons = [Search, Bell, Users, Rocket, TrendingUp];

export function TheSystem({ data }: TheSystemProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto py-12">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    {data.title}
                </h2>
                <p className="text-2xl text-text-muted">
                    {data.subtitle}
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute ltr:left-[32px] rtl:right-[32px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                <div className="space-y-12">
                    {data.items.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="relative flex gap-8 md:gap-12 rtl:pr-2 ltr:pl-2 items-start group"
                            >
                                {/* Icon Bubble */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <div className="pt-3 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
