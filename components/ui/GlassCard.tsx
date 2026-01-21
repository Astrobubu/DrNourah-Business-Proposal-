import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:translate-y-[-4px] hover:shadow-md",
                className
            )}
        >
            {children}
        </div>
    );
}
