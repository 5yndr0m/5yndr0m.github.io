import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    coverImage: string;
}

const posts: BlogPost[] = [
    {
        slug: "setting-up-windows-vm-on-arch-linux",
        title: "Setting Up a Windows VM on Arch Linux",
        excerpt: "A comprehensive guide to running Windows 10/11 with near-native performance on Arch Linux using QEMU, KVM, and VirtIO drivers.",
        date: "2025-08-01",
        tags: ["arch", "vm", "kvm"],
        coverImage: "/images/blog/vm-setup.jpg",
    },
];

export default function Blog() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-nord8 mb-4">The Blog</h2>
                <p className="text-nord4/70 text-lg max-w-2xl mx-auto">
                    Thoughts, tutorials, and adventures in cybersecurity, Linux, and development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col bg-nord1 rounded-2xl overflow-hidden border border-nord2 hover:border-nord8 hover:shadow-2xl hover:shadow-nord8/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="relative h-48 w-full bg-nord3 overflow-hidden">
                            {/* Fallback pattern if image fails or for missing images */}
                            <div className="absolute inset-0 bg-gradient-to-br from-nord3 to-nord1 flex items-center justify-center">
                                <span className="text-nord4/20 text-4xl font-bold">./blog</span>
                            </div>
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            // Using unoptimized for static export (configured in next.config.ts), but good to serve real inputs
                            />
                        </div>

                        <div className="flex-1 p-6 flex flex-col">
                            <div className="flex items-center gap-2 text-xs text-nord4/60 mb-3">
                                <Calendar className="w-3 h-3" />
                                <time dateTime={post.date}>{post.date}</time>
                            </div>

                            <h3 className="text-xl font-bold text-nord6 group-hover:text-nord8 transition-colors mb-3 line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-nord4/70 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md bg-nord3/50 text-xs text-nord8 border border-nord3">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
