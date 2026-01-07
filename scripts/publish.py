import os
import shutil
import sys
import re
from datetime import datetime

# Configuration
CONTENT_DIR = "src/content/blog"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    return re.sub(r'[-\s]+', '-', text).strip('-')

def publish_note(obsidian_path):
    if not os.path.exists(obsidian_path):
        print(f"Error: File not found at {obsidian_path}")
        return

    with open(obsidian_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple Frontmatter Check/Generation
    filename = os.path.basename(obsidian_path)
    title = filename.replace('.md', '')
    slug = slugify(title)
    
    # Check if frontmatter exists
    has_frontmatter = content.startswith('---')
    
    if not has_frontmatter:
        # Generate basic frontmatter
        date_str = datetime.now().strftime("%Y-%m-%d")
        frontmatter = f"""---
title: "{title}"
date: "{date_str}"
excerpt: "Quick update from my Obsidian vault."
tags: ["obsidian", "sync"]
coverImage: "/images/blog/default.jpg"
---

"""
        content = frontmatter + content

    target_path = os.path.join(PROJECT_ROOT, CONTENT_DIR, f"{slug}.md")
    
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully published: {title}")
    print(f"Target: {target_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python publish.py <path_to_obsidian_note>")
        sys.exit(1)
    
    publish_note(sys.argv[1])
