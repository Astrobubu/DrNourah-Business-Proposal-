"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-off-white">
            {/* Top Right Teal Blob */}
            <motion.div
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-teal/5 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bottom Left Coral Blob */}
            <motion.div
                className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent-coral/5 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Center Subtle Shape */}
            <motion.div
                className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[800px] h-[800px] rounded-full bg-accent-sage/3 blur-3xl"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise Overlay */}
            <div className="noise-overlay" />
        </div>
    );
}
