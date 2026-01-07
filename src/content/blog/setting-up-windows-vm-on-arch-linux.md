---
title: "Setting Up a Windows VM on Arch Linux"
date: "2025-08-01"
excerpt: "A comprehensive guide to running Windows 10/11 with near-native performance on Arch Linux using QEMU, KVM, and VirtIO drivers."
tags: ["arch", "vm", "kvm", "guide"]
coverImage: "/images/blog/vm-setup.jpg"
---

Running Windows in a virtual machine on Arch Linux is straightforward with QEMU/KVM and virt-manager. This guide walks you through creating a Windows VM with optimized performance using VirtIO drivers.

## Step 1: Download Windows ISO

First, you'll need a Windows installation image. Visit Microsoft's official website to download the Windows 10 or Windows 11 ISO. If you have a Windows license, you can use the Media Creation Tool. Save the ISO file somewhere accessible, like `/home/syndrom/Downloads/`.

## Step 2: Download VirtIO Drivers

Windows needs special drivers for optimal performance with KVM. These VirtIO drivers significantly improve disk and network performance. Download them with:

```bash
# Download the latest stable VirtIO drivers ISO
wget https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso -O ~/Downloads/virtio-win.iso
```

## Step 3: Create the Windows VM

Launch virt-manager and create a new virtual machine. Select "Local install media (ISO image or CDROM)" and click Forward. Browse to your Windows ISO file and let it automatically detect the operating system. If detection fails, manually select Microsoft Windows and your specific version.

For memory and CPU settings, allocate at least 4GB of RAM (4096 MB) for Windows 10/11, and 2-4 CPU cores depending on what your system can handle. Create a disk image of at least 50GB, though more is recommended for a comfortable experience.

On the final configuration screen, name your VM something like "Windows-10" and importantly, check "Customize configuration before install" before clicking Finish.

## Step 4: Optimize VM Settings

The configuration window provides several optimization opportunities. In Boot Options, enable the boot menu and ensure the CD-ROM is first in the boot order.

Add the VirtIO drivers by clicking "Add Hardware", selecting Storage, choosing "CDROM device", and browsing to the virtio-win.iso file you downloaded earlier.

For better performance, change your network device model to "virtio" and your main disk bus to "VirtIO" (this requires loading drivers during Windows installation). Set the video model to "QXL" or "Virtio", and if you need audio, set the sound model to "ich9".

## Step 5: Install Windows

Click "Begin Installation" to start the VM. It will boot from the Windows ISO. During installation, when you reach the disk selection screen, you might not see any drives initially. This is normal.

Click "Load driver" and browse to the VirtIO CD-ROM. Navigate to `viostor/w10/amd64` (or the appropriate version for your Windows) and select the storage driver. Your disk should now appear, and you can continue with the normal Windows installation process.

## Step 6: Install VirtIO Drivers (Post-installation)

After Windows boots for the first time, you need to install the remaining VirtIO drivers. Open File Explorer, navigate to the VirtIO CD-ROM, and run `virtio-win-gt-x64.msi`. This installs all the remaining drivers for optimal performance.

I also recommend installing SPICE Guest Tools, which you can find at the SPICE project website or on the VirtIO CD-ROM at `guest-agent/qemu-ga-x86_64.msi`. This enables clipboard sharing, dynamic resolution adjustment, and better overall integration between host and guest.

## Step 7: Optimize Performance

Within Windows, you can improve performance by disabling Windows Search indexing, unnecessary startup programs, and Windows Defender real-time protection if you don't need it. You can also disable visual effects through Control Panel → System → Advanced → Performance and select "Adjust for best performance".

In the VM settings, allocate more RAM if you have it available and enable hardware acceleration if your CPU supports it.

## Useful Tips

Take snapshots before making major changes using virt-manager. You can set up shared folders using SPICE WebDAV or Samba. USB devices can be passed through from the host to the VM when needed. Press Ctrl+Alt+F to toggle full screen mode in the VM viewer.

With these settings, you should have a well-performing Windows VM running on your Arch Linux system!
