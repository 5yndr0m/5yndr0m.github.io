import React, { useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const projects = [
    {
        title: "DisasterWatch",
        description: "A full-stack MERN mobile and web application for disaster reporting and management. Led a team of 8 and served as the main developer.",
        tech: "React Native, Expo, MongoDB, Express",
        link: "https://github.com/5yndr0m/DisasterWatch",
        color: "mainPurple",
    },
    {
        title: "RustySec",
        description: "A comprehensive Rust-based cybersecurity toolkit featuring network scanners, password auditors, and security automation tools.",
        tech: "Rust, Bash, Docker, Network Security",
        link: "https://github.com/5yndr0m/rusty-sec",
        color: "mainGreen",
    },
    {
        title: "Home Lab Automation",
        description: "Secure self-hosted infra using Podman and n8n. Automated system administration and logging with Cloudflare Tunnel isolation.",
        tech: "n8n, Podman, Arch Linux, Cloudflared",
        link: "https://github.com/5yndr0m/n8n-automation",
        color: "mainLavender",
    },
    {
        title: "Arch Hyprland Dotfiles",
        description: "Advanced personal configuration for Arch Linux and Hyprland, optimized for security research and developer productivity.",
        tech: "Bash, Lua, Hyprland, Wayland",
        link: "https://github.com/5yndr0m/dotfiles",
        color: "mainPurple",
    },
    {
        title: "SynShell CLI",
        description: "A suite of custom CLI tools developed in Bash and Python to streamline security audits and system tasks.",
        tech: "Bash, Python, CLI, Automation",
        link: "https://github.com/5yndr0m/synshell-cli",
        color: "mainGreen",
    }
];

export const ProjectsCarousel: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            {/* Navigation Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-mainPurple hover:bg-mainPurple hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                aria-label="Previous project"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-mainPurple hover:bg-mainPurple hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                aria-label="Next project"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] snap-center"
                    >
                        <div className={`h-full p-8 rounded-3xl bg-surface border border-white/5 hover:border-${project.color}/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group/card flex flex-col justify-between relative`}>
                            {/* Decorative Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}/5 blur-[60px] rounded-full group-hover/card:bg-${project.color}/10 transition-colors`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-2xl bg-${project.color}/10 border border-${project.color}/20`}>
                                        <Github className={`w-6 h-6 text-${project.color}`} />
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-white/5 transition-colors"
                                    >
                                        <ExternalLink size={20} className="text-slate-500 hover:text-white" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-gradient-primary">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <span className={`text-xs font-mono tracking-wider text-${project.color}/70 uppercase`}>
                                    {project.tech}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                {projects.map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                ))}
            </div>
        </div>
    );
};
