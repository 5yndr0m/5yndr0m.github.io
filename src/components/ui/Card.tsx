import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = "",
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900",
                className
            )}
            {...props}
        >
            <div className="relative h-full">{children}</div>
        </div>
    );
};
