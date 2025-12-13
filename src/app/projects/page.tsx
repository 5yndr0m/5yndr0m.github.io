import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tech: string;
    image: string;
    link: string;
    colorClass: string; // Border/Accent color class
}

const projects: Project[] = [
    {
        title: "RustySec",
        description:
            "A Rust-based cybersecurity toolkit for learning and research. Includes network scanning, password auditing, and automation scripts.",
        tech: "Rust, Bash, Docker, Linux",
        image: "/images/rusty-sec.jpg",
        link: "https://github.com/5yndr0m/rusty-sec",
        colorClass: "border-nord15 hover:shadow-nord15/20 ring-nord15",
    },
    {
        title: "n8n Automation",
        description:
            "Workflow automation using n8n for integrating APIs, notifications, and Linux system tasks.",
        tech: "n8n, Docker, JavaScript, Linux",
        image: "/images/n8n-automation.jpg",
        link: "https://github.com/5yndr0m/n8n-automation",
        colorClass: "border-nord10 hover:shadow-nord10/20 ring-nord10",
    },
    {
        title: "Arch Hyprland Dotfiles",
        description:
            "My personal Arch Linux + Hyprland configuration for a minimal, productive, and beautiful desktop environment.",
        tech: "Bash, Linux, Hyprland, Dotfiles",
        image: "/images/arch-hyprland.jpg",
        link: "https://github.com/5yndr0m/arch-hyprland-dotfiles",
        colorClass: "border-nord14 hover:shadow-nord14/20 ring-nord14",
    },
];

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-nord8 mb-10 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block bg-nord1 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.colorClass}`}
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-nord4 group-hover:text-nord8 transition-colors">
                                    {project.title}
                                </h3>
                                <ExternalLink className="w-5 h-5 text-nord4/50 group-hover:text-nord8" />
                            </div>
                            <p className="text-nord4/80 mb-4 line-clamp-3">{project.description}</p>
                            <div className="pt-4 border-t border-nord2">
                                <p className="text-sm font-mono text-nord9">{project.tech}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
