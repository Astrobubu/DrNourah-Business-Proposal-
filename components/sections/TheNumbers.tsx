"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

interface TheNumbersProps {
    data: {
        title: string;
        subtitle: string;
        quote: string;
        yourShare: string;
        items: {
            title: string;
            revenue: string;
            description: string;
        }[];
    };
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) => Math.round(current));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    useEffect(() => {
        return display.on("change", (latest) => setDisplayValue(latest));
    }, [display]);

    return (
        <span ref={ref} className="font-heading font-bold text-6xl md:text-7xl text-primary block mb-4" dir="ltr">
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

const milestonesValues = [
    { value: 100, prefix: "", suffix: "", progress: 10 },
    { value: 1000, prefix: "", suffix: "", progress: 40 },
    { value: 5000, prefix: "", suffix: "+", progress: 100 },
];

export function TheNumbers({ data }: TheNumbersProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-12">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">{data.title}</h2>
                <p className="text-2xl text-text-muted max-w-3xl mx-auto">
                    {data.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {data.items.map((milestone, index) => {
                    const values = milestonesValues[index];
                    return (
                        <GlassCard key={index} className="flex flex-col items-center text-center py-12 px-6" hoverEffect={true}>
                            <AnimatedCounter value={values.value} prefix={values.prefix} suffix={values.suffix} />
                            <h3 className="text-2xl font-bold mb-6">{milestone.title}</h3>

                            <div className="bg-primary/5 rounded-2xl p-6 w-full mt-auto">
                                <p className="font-bold text-primary text-2xl mb-2">
                                    {data.yourShare}: <br /><span dir="ltr" className="text-3xl">{milestone.revenue}</span>
                                </p>
                                <p className="text-base text-text-muted">{milestone.description}</p>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>

            <GlassCard className="bg-accent-teal/5 border-accent-teal/20 mx-auto max-w-4xl text-center p-8">
                <p className="text-2xl md:text-3xl font-medium text-primary leading-relaxed">
                    "{data.quote}"
                </p>
            </GlassCard>
        </section>
    );
}
