"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Trophy, Activity, Smile, ShoppingBag, MousePointerClick, X, Check, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductIdeasProps {
    data: {
        title: string;
        subtitle: string;
        potentialRevenue: string;
        whyThisWorks: string;
        keyFeatures: string;
        categories: {
            title: string;
            items: {
                title: string;
                tag: string;
                desc: string;
                revenue: string;
                details?: {
                    features: string[];
                    why: string;
                };
            }[];
        }[];
    };
}

const productStyles = [
    { icon: Trophy, color: "text-blue-500 hover:text-blue-600", bg: "bg-blue-50 group-hover:bg-blue-100", border: "border-blue-100" },
    { icon: Activity, color: "text-teal-500 hover:text-teal-600", bg: "bg-teal-50 group-hover:bg-teal-100", border: "border-teal-100" },
    { icon: Smile, color: "text-orange-500 hover:text-orange-600", bg: "bg-orange-50 group-hover:bg-orange-100", border: "border-orange-100" },
    { icon: ShoppingBag, color: "text-purple-500 hover:text-purple-600", bg: "bg-purple-50 group-hover:bg-purple-100", border: "border-purple-100" },
    { icon: Users, color: "text-pink-500 hover:text-pink-600", bg: "bg-pink-50 group-hover:bg-pink-100", border: "border-pink-100" },
    { icon: Rocket, color: "text-indigo-500 hover:text-indigo-600", bg: "bg-indigo-50 group-hover:bg-indigo-100", border: "border-indigo-100" },
];

export function ProductIdeas({ data }: ProductIdeasProps) {
    const [selectedId, setSelectedId] = useState<{ catIndex: number; itemIndex: number } | null>(null);

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-12 relative">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    {data.title}
                </h2>
                <p className="text-2xl text-text-muted max-w-3xl mx-auto flex items-center justify-center gap-3">
                    {data.subtitle}
                    <MousePointerClick className="w-6 h-6 animate-bounce text-gray-400" />
                </p>
            </div>

            <div className="space-y-16 relative z-10 text-left rtl:text-right">
                {data.categories.map((category, catIndex) => (
                    <div key={catIndex}>
                        <h3 className="text-3xl font-bold mb-8 text-gray-800 rtl:text-4xl">{category.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((product, itemIndex) => {
                                const style = productStyles[(catIndex * 3 + itemIndex) % productStyles.length];
                                const isSelected = selectedId?.catIndex === catIndex && selectedId?.itemIndex === itemIndex;
                                const isAnySelected = selectedId !== null;

                                return (
                                    <motion.div
                                        layoutId={`card-container-${catIndex}-${itemIndex}`}
                                        key={itemIndex}
                                        onClick={() => setSelectedId({ catIndex, itemIndex })}
                                        className={cn(
                                            "cursor-pointer group relative",
                                            isAnySelected && !isSelected && "opacity-50 blur-sm transition-all duration-300 pointer-events-none"
                                        )}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <GlassCard
                                            className={`h-full flex flex-col p-8 border hover:shadow-xl transition-all ${style.border}`}
                                            hoverEffect={false} // Handle manually via framer
                                        >
                                            <motion.div layoutId={`card-content-${catIndex}-${itemIndex}`} className="flex flex-col h-full">
                                                <div className="flex items-start justify-between mb-6 rtl:flex-row-reverse">
                                                    <div className={`w-14 h-14 rounded-2xl ${style.bg} transition-colors flex items-center justify-center`}>
                                                        <style.icon className={`w-7 h-7 ${style.color} transition-colors`} />
                                                    </div>
                                                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.color}`}>
                                                        {product.tag}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl rtl:text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{product.title}</h3>
                                                <p className="text-text-muted text-sm rtl:text-base flex-grow leading-relaxed mb-6">
                                                    {product.desc}
                                                </p>

                                                <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between rtl:flex-row-reverse">
                                                    <div>
                                                        <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">{data.potentialRevenue}</p>
                                                        <p className="text-sm font-bold text-gray-900">{product.revenue}</p>
                                                    </div>
                                                    <MousePointerClick className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                                </div>
                                            </motion.div>
                                        </GlassCard>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (() => {
                    const { catIndex, itemIndex } = selectedId;
                    const product = data.categories[catIndex].items[itemIndex];
                    const style = productStyles[(catIndex * 3 + itemIndex) % productStyles.length];
                    const Icon = style.icon;

                    return (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                            />

                            <motion.div
                                layoutId={`card-container-${catIndex}-${itemIndex}`}
                                className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl z-50 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-50 rtl:left-6 rtl:right-auto"
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>

                                <div className="p-8 md:p-12 rtl:text-right">
                                    {/* Header */}
                                    <motion.div layoutId={`card-content-${catIndex}-${itemIndex}`}>
                                        <div className="flex items-center gap-4 mb-6 rtl:flex-row-reverse">
                                            <div className={`w-16 h-16 rounded-2xl ${style.bg} flex items-center justify-center`}>
                                                <Icon className={`w-8 h-8 ${style.color}`} />
                                            </div>
                                            <div>
                                                <span className={`text-sm font-bold uppercase tracking-wider ${style.color} mb-1 block`}>
                                                    {product.tag}
                                                </span>
                                                <h3 className="text-3xl rtl:text-4xl font-bold text-gray-900">{product.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
                                            {product.desc}
                                        </p>
                                    </motion.div>

                                    {/* Detailed Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="space-y-8"
                                    >
                                        {product.details && (
                                            <>
                                                <div>
                                                    <h4 className={`font-bold text-lg mb-4 flex items-center gap-2 ${style.color} rtl:flex-row-reverse`}>
                                                        <Activity className={`w-5 h-5 ${style.color}`} /> {data.keyFeatures}
                                                    </h4>
                                                    <ul className="grid grid-cols-1 gap-3">
                                                        {product.details.features.map((feature, i) => (
                                                            <li key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg rtl:flex-row-reverse">
                                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.color}`} />
                                                                <span className="text-gray-700 font-medium">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-accent-coral/5 border border-accent-coral/10 p-6 rounded-2xl">
                                                    <h4 className="font-bold text-lg text-accent-coral mb-2">{data.whyThisWorks}</h4>
                                                    <p className="text-gray-800 leading-relaxed">
                                                        {product.details.why}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 rtl:flex-row-reverse">
                                                    <div className="text-sm text-text-muted font-medium">{data.potentialRevenue}</div>
                                                    <div className="text-2xl font-bold text-primary">{product.revenue}</div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    );
                })()}
            </AnimatePresence>
        </section>
    );
}
