const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('Usage: node create-post.js <json-payload>');
    process.exit(1);
}

const payload = JSON.parse(args[0]);
const { title, slug, date, content, tags, coverImage } = payload;

if (!title || !slug || !date || !content) {
    console.error('Missing required fields: title, slug, date, content');
    process.exit(1);
}

const targetDir = path.join(__dirname, '../src/app/blog', slug);
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const tsxContent = `import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function Post() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center text-nord4 hover:text-nord8 mb-8 transition-colors group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>
      
      <header className="mb-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm">
           <span className="bg-nord10/20 text-nord10 px-3 py-1 rounded-full font-medium">Post</span>
           <span className="text-nord4/50">•</span>
           <span className="text-nord4/70 flex items-center"><Calendar className="w-4 h-4 mr-1"/> ${date}</span>
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold text-nord6 mb-8 tracking-tight leading-tight">
          ${title}
        </h1>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-nord3 mb-12 bg-nord2">
           ${coverImage
        ? `<Image src="${coverImage}" alt="${title}" fill className="object-cover" priority />`
        : `<div className="absolute inset-0 flex items-center justify-center bg-nord3 text-nord4/30"><span className="text-xl">Cover Image Placeholder</span></div>`
    }
        </div>
      </header>
      
      <div className="prose prose-lg prose-invert max-w-none prose-headings:text-nord8 prose-a:text-nord9 hover:prose-a:text-nord8 prose-strong:text-nord9 prose-code:text-nord13 prose-code:bg-nord1 prose-code:px-1 prose-code:rounded prose-pre:bg-nord1">
        ${content}
      </div>
    </article>
  );
}
`;

fs.writeFileSync(path.join(targetDir, 'page.tsx'), tsxContent);
console.log(`Created post at src/app/blog/${slug}/page.tsx`);

// Update blog index (Optional: In a real app, you might read from file system or use a CMS)
// For now, we will just log that the user needs to update the index or use a more dynamic approach
console.log('NOTE: You may need to manually update src/app/blog/page.tsx to include this new post in the list, or refactor to read files dynamically.');
