"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Users, Rocket } from "lucide-react";

interface ValidationSystemProps {
    data: {
        title: string;
        subtitle: string;
        steps: {
            title: string;
            desc: string;
        }[];
    };
}

const icons = [Search, BarChart3, Users, Rocket];

export function ValidationSystem({ data }: ValidationSystemProps) {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16 relative">
                {data.steps.map((step, index) => {
                    const Icon = icons[index];
                    return (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors duration-300 mb-6 relative z-10">
                                <Icon className="w-8 h-8" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl rtl:text-3xl font-bold mb-3">{step.title}</h3>
                            <p className="text-lg text-text-muted leading-relaxed max-w-sm">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
