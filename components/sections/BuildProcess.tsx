"use client";

import { motion } from "framer-motion";

interface BuildProcessProps {
    data: {
        title: string;
        timeline: {
            week: string;
            phase: string;
            desc: string;
        }[];
    };
}

export function BuildProcess({ data }: BuildProcessProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto py-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-gray-900">
                {data.title}
            </h2>

            <div className="space-y-4">
                {data.timeline.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4 md:gap-8"
                    >
                        <div className="min-w-[120px]">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold">
                                {item.week}
                            </span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-primary">{item.phase}</h3>
                        </div>
                        <div className="md:text-right">
                            <p className="text-lg text-gray-700">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
