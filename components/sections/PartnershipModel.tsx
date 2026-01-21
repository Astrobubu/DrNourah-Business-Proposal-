"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Handshake } from "lucide-react";

interface PartnershipModelProps {
    data: {
        header1: string;
        header2: string;
        body: string;
        split: string;
        policy: string;
        weHandle: string[];
        youHandle: string[];
        weHandleLabel: string;
        youHandleLabel: string;
    };
}

export function PartnershipModel({ data }: PartnershipModelProps) {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 max-w-7xl mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left Side: Illustration */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent-teal/20 blur-3xl rounded-full scale-150" />
                        <GlassCard className="relative z-10 p-12 flex flex-col items-center justify-center border-accent-teal/30 bg-white/60">
                            <Handshake className="w-32 h-32 text-accent-teal mb-6" strokeWidth={1} />
                            <div className="text-center">
                                <p className="font-bold text-accent-teal text-xl mb-2">{data.split}</p>
                                <p className="text-sm text-text-muted">{data.policy}</p>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-8 order-1 lg:order-2">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-2 opacity-60">
                            {data.header1}
                        </h2>
                        <h3 className="text-5xl md:text-7xl text-accent-teal font-heading  leading-tight">
                            {data.header2}
                        </h3>
                    </div>

                    <p className="text-xl text-text-main leading-relaxed">
                        {data.body}
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 border-b text-2xl border-gray-200 pb-2">{data.weHandleLabel}</h4>
                            <ul className="space-y-2">
                                {data.weHandle.map((item, i) => (
                                    <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 border-b text-2xl border-gray-200 pb-2">{data.youHandleLabel}</h4>
                            <ul className="space-y-2">
                                {data.youHandle.map((item, i) => (
                                    <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
