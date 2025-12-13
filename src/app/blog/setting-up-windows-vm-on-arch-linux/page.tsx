import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";

export default function Post() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-nord4 hover:text-nord8 mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            <header className="mb-12 text-center">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm">
                    <span className="bg-nord10/20 text-nord10 px-3 py-1 rounded-full font-medium">Guide</span>
                    <span className="text-nord4/50">•</span>
                    <span className="text-nord4/70 flex items-center"><Calendar className="w-4 h-4 mr-1" /> Aug 1, 2025</span>
                    <span className="text-nord4/50">•</span>
                    <span className="text-nord4/70 flex items-center"><Clock className="w-4 h-4 mr-1" /> 10 min read</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-extrabold text-nord6 mb-8 tracking-tight leading-tight">
                    Setting Up a Windows VM on Arch Linux
                </h1>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-nord3 mb-12 bg-nord2">
                    <div className="absolute inset-0 flex items-center justify-center bg-nord3 text-nord4/30">
                        <span className="text-xl">Cover Image Placeholder</span>
                    </div>
                    {/*
                   <Image
                     src="/images/blog/vm-setup.jpg"
                     alt="Windows VM on Arch"
                     fill
                     className="object-cover"
                     priority
                   />
                   */}
                </div>
            </header>

            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-nord8 prose-a:text-nord9 hover:prose-a:text-nord8 prose-strong:text-nord9 prose-code:text-nord13 prose-code:bg-nord1 prose-code:px-1 prose-code:rounded prose-pre:bg-nord1">
                <p>
                    Running Windows in a virtual machine on Arch Linux is straightforward with QEMU/KVM and
                    virt-manager. This guide walks you through creating a Windows VM with optimized
                    performance using VirtIO drivers.
                </p>

                <h2>Step 1: Download Windows ISO</h2>
                <p>
                    First, you&apos;ll need a Windows installation image. Visit Microsoft&apos;s official website to
                    download the Windows 10 or Windows 11 ISO. If you have a Windows license, you can use the
                    Media Creation Tool. Save the ISO file somewhere accessible, like{" "}
                    <code>/home/syndrom/Downloads/</code>.
                </p>

                <h2>Step 2: Download VirtIO Drivers</h2>
                <p>
                    Windows needs special drivers for optimal performance with KVM. These VirtIO drivers
                    significantly improve disk and network performance. Download them with:
                </p>
                <pre>
                    <code>{`# Download the latest stable VirtIO drivers ISO
wget https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso -O ~/Downloads/virtio-win.iso`}</code>
                </pre>

                <h2>Step 3: Create the Windows VM</h2>
                <p>
                    Launch virt-manager and create a new virtual machine. Select &quot;Local install media (ISO
                    image or CDROM)&quot; and click Forward. Browse to your Windows ISO file and let it
                    automatically detect the operating system. If detection fails, manually select Microsoft
                    Windows and your specific version.
                </p>
                <p>
                    For memory and CPU settings, allocate at least 4GB of RAM (4096 MB) for Windows 10/11, and
                    2-4 CPU cores depending on what your system can handle. Create a disk image of at least
                    50GB, though more is recommended for a comfortable experience.
                </p>
                <p>
                    On the final configuration screen, name your VM something like &quot;Windows-10&quot; and
                    importantly, check &quot;Customize configuration before install&quot; before clicking Finish.
                </p>

                <h2>Step 4: Optimize VM Settings</h2>
                <p>
                    The configuration window provides several optimization opportunities. In Boot Options,
                    enable the boot menu and ensure the CD-ROM is first in the boot order.
                </p>
                <p>
                    Add the VirtIO drivers by clicking &quot;Add Hardware&quot;, selecting Storage, choosing &quot;CDROM
                    device&quot;, and browsing to the virtio-win.iso file you downloaded earlier.
                </p>
                <p>
                    For better performance, change your network device model to &quot;virtio&quot; and your main disk
                    bus to &quot;VirtIO&quot; (this requires loading drivers during Windows installation). Set the video
                    model to &quot;QXL&quot; or &quot;Virtio&quot;, and if you need audio, set the sound model to &quot;ich9&quot;.
                </p>

                <h2>Step 5: Install Windows</h2>
                <p>
                    Click &quot;Begin Installation&quot; to start the VM. It will boot from the Windows ISO. During
                    installation, when you reach the disk selection screen, you might not see any drives
                    initially. This is normal.
                </p>
                <p>
                    Click &quot;Load driver&quot; and browse to the VirtIO CD-ROM. Navigate to{" "}
                    <code>viostor/w10/amd64</code> (or the appropriate version for your Windows) and select
                    the storage driver. Your disk should now appear, and you can continue with the normal
                    Windows installation process.
                </p>

                <h2>Step 6: Install VirtIO Drivers (Post-installation)</h2>
                <p>
                    After Windows boots for the first time, you need to install the remaining VirtIO drivers.
                    Open File Explorer, navigate to the VirtIO CD-ROM, and run{" "}
                    <code>virtio-win-gt-x64.msi</code>. This installs all the remaining drivers for optimal
                    performance.
                </p>
                <p>
                    I also recommend installing SPICE Guest Tools, which you can find at the SPICE project
                    website or on the VirtIO CD-ROM at <code>guest-agent/qemu-ga-x86_64.msi</code>. This
                    enables clipboard sharing, dynamic resolution adjustment, and better overall integration
                    between host and guest.
                </p>

                <h2>Step 7: Optimize Performance</h2>
                <p>
                    Within Windows, you can improve performance by disabling Windows Search indexing,
                    unnecessary startup programs, and Windows Defender real-time protection if you don&apos;t need
                    it. You can also disable visual effects through Control Panel → System → Advanced →
                    Performance and select &quot;Adjust for best performance&quot;.
                </p>
                <p>
                    In the VM settings, allocate more RAM if you have it available and enable hardware
                    acceleration if your CPU supports it.
                </p>

                <h2>Useful Tips</h2>
                <p>
                    Take snapshots before making major changes using virt-manager. You can set up shared
                    folders using SPICE WebDAV or Samba. USB devices can be passed through from the host to
                    the VM when needed. Press Ctrl+Alt+F to toggle full screen mode in the VM viewer.
                </p>
                <p>
                    With these settings, you should have a well-performing Windows VM running on your Arch
                    Linux system!
                </p>
            </div>
        </article>
    );
}
