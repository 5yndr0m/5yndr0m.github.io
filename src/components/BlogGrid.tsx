import React from "react";
import { Card } from "./ui/Card";
import { Calendar } from "lucide-react";

interface BlogPost {
    id: string;
    data: {
        title: string;
        date: string;
        excerpt: string;
        coverImage: string;
        tags: string[];
    };
}

interface BlogGridProps {
    posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <a key={post.id} href={`/blog/${post.id}`} className="group block h-full">
                    <Card className="h-full flex flex-col p-0 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="relative h-64 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
                            <img
                                src={post.data.coverImage}
                                alt={post.data.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest group-hover:bg-mainPurple group-hover:border-mainPurple transition-colors">
                                    {post.data.tags[0]}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 mb-4 uppercase tracking-widest">
                                <Calendar className="w-3 h-3 text-mainPurple" />
                                <time dateTime={post.data.date}>{post.data.date}</time>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-mainPurple transition-colors">
                                {post.data.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {post.data.excerpt}
                            </p>
                            <div className="mt-auto flex items-center text-xs font-bold text-mainGreen uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Read Protocol <span className="ml-2">→</span>
                            </div>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
};
