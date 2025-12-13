import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, Globe, Server, Hash, FileText } from "lucide-react";

const links = [
    { name: "Email", href: "mailto:sdilanjana21@gmail.com", icon: Mail, label: "sdilanjana21@gmail.com" },
    { name: "X (Twitter)", href: "https://x.com/Syndromsdk", icon: Twitter, label: "@Syndromsdk" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/senal-dilanjana-774799266/", icon: Linkedin, label: "Senal Dilanjana" },
    { name: "GitHub", href: "https://github.com/5yndr0m", icon: Github, label: "5yndr0m" },
    { name: "TryHackMe", href: "https://tryhackme.com/", icon: Globe, label: "TryHackMe Profile" },
    { name: "HackTheBox", href: "https://hackthebox.com/", icon: Server, label: "HackTheBox Profile" },
    { name: "Mastodon", href: "https://mastodon.social/", icon: Hash, label: "Mastodon" },
    { name: "Bluesky", href: "https://bsky.app/", icon: Globe, label: "Bluesky" },
    { name: "Discord", href: "https://discord.com/", icon: Hash, label: "Discord" },
    { name: "Reddit", href: "https://reddit.com/", icon: Hash, label: "Reddit" },
    { name: "Medium", href: "https://medium.com/", icon: FileText, label: "Medium" },
];

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-nord8 mb-4">Contact Me</h2>
                <p className="text-nord4/80 text-lg">
                    Feel free to reach out for collaborations, inquiries, or just to say hi!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="flex items-center p-4 bg-nord1 rounded-lg border border-nord2 hover:bg-nord2 hover:border-nord9 transition-all group"
                    >
                        <link.icon className="w-6 h-6 text-nord9 mr-3 group-hover:text-nord8" />
                        <span className="font-medium text-nord4 group-hover:text-white">{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
