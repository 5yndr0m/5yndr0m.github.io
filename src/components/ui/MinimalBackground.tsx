import * as React from "react";

export const MinimalBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-zinc-950">
            {/* Dot Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)] z-10" />

            {/* Subtle Backdrop Colors */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-mainPurple/30 rounded-full blur-[128px] opacity-60 mix-blend-screen animate-pulse duration-[4000ms]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mainGreen/30 rounded-full blur-[128px] opacity-60 mix-blend-screen animate-pulse duration-[5000ms] delay-1000" />
        </div>
    );
};
