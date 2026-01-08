import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MatteTitle = () => {
    return (
        <div className="relative group p-4">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none select-none">
                <span className="text-matte-gradient filter drop-shadow-sm">
                    SYNDROM
                </span>
            </h1>
        </div>
    );
};

export const HeroText = () => {
    return (
        <div className="space-y-6 relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <MatteTitle />
            <TypewriterSubtitle />
        </div>
    );
};

const TypewriterSubtitle = () => {
    const text = "Cybersecurity Researcher • Linux Technologist";
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!isTyping) return;

        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(intervalId);
                setIsTyping(false);
            }
        }, 50); // Typing speed

        return () => clearInterval(intervalId);
    }, [isTyping]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-slate-300 font-light tracking-[0.2em] uppercase font-mono h-8 flex items-center gap-1"
        >
            <span>{displayedText}</span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-6 bg-mainGreen block"
            />
        </motion.div>
    );
};
