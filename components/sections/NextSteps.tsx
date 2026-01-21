"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NextStepsProps {
    data: {
        title: string;
        subtitle: string;
        steps: string[];
        cta: string;
        subCta: string;
    };
}

export function NextSteps({ data }: NextStepsProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
            <div className="max-w-4xl w-full">
                <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">{data.title}</h2>
                <p className="text-2xl text-text-muted mb-16">
                    {data.subtitle}
                </p>

                <div className="space-y-4 mb-16">
                    {data.steps.map((text, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-4 text-xl md:text-2xl font-medium text-gray-800">
                            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mx-auto">
                    <p className="text-4xl md:text-5xl font-bold text-primary font-heading">
                        {data.cta}
                    </p>
                    <p className="mt-2 text-xl text-text-muted">{data.subCta}</p>
                </div>
            </div>
        </section>
    );
}
