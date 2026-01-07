export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    coverImage: string;
}

export const posts: Post[] = [
    {
        slug: "setting-up-windows-vm-on-arch-linux",
        title: "Setting Up a Windows VM on Arch Linux",
        excerpt: "A comprehensive guide to running Windows 10/11 with near-native performance on Arch Linux using QEMU, KVM, and VirtIO drivers.",
        date: "2025-08-01",
        tags: ["arch", "vm", "kvm"],
        coverImage: "/images/blog/vm-setup.jpg",
    },
];
