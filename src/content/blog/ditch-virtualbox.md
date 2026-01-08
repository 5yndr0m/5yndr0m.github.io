---
title: "Ditch VirtualBox"
date: "2026-01-08"
excerpt: "Quick update from my Obsidian vault."
tags: ["virtualization", "KVM", "QEMU"]
coverImage: "/images/blog/ditch_virtualbox_banner.png"
---

# Ditch VirtualBox: The Beginner’s Guide to KVM/QEMU on Arch Linux

If you are running Arch Linux, you probably like having control over your system. While tools like VirtualBox are great, they are external software. If you want the fastest, most native way to run virtual machines (VMs) on Linux, you need **KVM (Kernel-based Virtual Machine)** and **QEMU**.

It sounds intimidating, but it’s actually quite simple to set up. By the end of this guide, you’ll have a professional-grade virtualization lab running right on your Arch desktop.

Let’s get started!

---

## Prerequisites: Can Your Hardware Handle It?

Before we install anything, we need to make sure your computer’s processor supports virtualization. Most modern CPUs do, but it’s good to check.

Open your terminal and run:

Bash

```
lscpu | grep Virtualization
```

![CPU Virtualization Check](/images/blog/ditch_virtualbox_1.png)

If you see output mentioning VT-x or AMD-V, you are good to go!

Note: If nothing shows up, you might need to enable "Virtualization" in your computer’s BIOS/UEFI settings.

---

## Step 1: Install the Virtualization Stack

We need to grab a few packages. We aren't just installing one program; we are installing a suite of tools that work together:

- **QEMU:** The engine that emulates hardware.
    
- **Virt-Manager:** The graphical interface (GUI) so you don't have to type long commands.
    
- **Dnsmasq/Bridge-utils:** Tools to handle networking.
    

Run this command to install the main components:

Bash

```
sudo pacman -S qemu-full virt-manager virt-viewer dnsmasq vde2 bridge-utils openbsd-netcat
```

Next, let's grab some firewall tools to ensure your VMs can talk to the network safely:

Bash

```
sudo pacman -S ebtables iptables-nft
```

---

## Step 2: Wake Up the Daemons

Now that the software is installed, we need to turn on the background service (`libvirtd`) that manages the virtual machines.

Enable and start the service with these commands:

Bash

```
sudo systemctl enable libvirtd.service
sudo systemctl start libvirtd.service
```

To make sure everything is happy, check the status:

Bash

```
sudo systemctl status libvirtd.service
```

![Libvirtd Service Status](/images/blog/ditch_virtualbox_2.png)

---

## Step 3: Grant Yourself Permission

This is the step most beginners forget! By default, only the `root` user can manage virtual machines. You need to add your standard user account to the `libvirt` group.

Run this (it automatically adds your current user):

Bash

```
sudo usermod -a -G libvirt $(whoami)
```

**Important:** You must **log out and log back in** (or reboot your computer) for this change to apply. If you don't, you'll get "Permission Denied" errors later.

---

## Step 4: Turn on the Internet

We want our Virtual Machines to have internet access, right? KVM comes with a "default" network, but we have to switch it on.

Bash

```
# Start the default network
sudo virsh net-start default

# Make sure it starts automatically on boot
sudo virsh net-autostart default
```

You can verify it’s running with:

Bash

```
sudo virsh net-list --all
```

---

## Step 5: Launching Your First VM

Now for the fun part! Open your application menu and look for **"Virtual Machine Manager"** (or run `virt-manager` in the terminal).

![Virt Manager Interface](/images/blog/ditch_virtualbox_3.png)

Image Description: A screenshot of the main "Virtual Machine Manager" window. It is currently empty, waiting for a connection.

1. Click the icon to **"Create a new virtual machine"** (usually a monitor with a generic "play" or "star" icon).
    
2. Select **Local install media** (if you have an ISO file downloaded).
    
3. Choose your ISO (like a Windows 10 installer or an Ubuntu ISO).
    
4. Set your CPU and RAM usage.
    
5. Create your virtual hard drive.
    

![VM Creation Wizard](/images/blog/ditch_virtualbox_4.png)

Once you click Finish, your VM will boot up just like a real computer!

---

## Pro Tip: Command Line Installation

If you prefer the terminal over clicking menus, you can actually create a VM entirely via command line. Here is a template to create a Linux VM:

```Bash
virt-install \
  --name myvm \
  --ram 2048 \
  --disk path=/var/lib/libvirt/images/myvm.img,size=20 \
  --vcpus 2 \
  --os-type linux \
  --os-variant generic \
  --network bridge=virbr0 \
  --graphics vnc \
  --console pty,target_type=serial \
  --cdrom /path/to/your/iso/file.iso
```

---

## Troubleshooting & Extras

Ran into a snag? Here are a few quick fixes for common issues:

- **"Permission Denied" Error:** Did you remember to log out and log back in after Step 3? Double-check that you are in the `libvirt` group.

- **Annoying Warning Messages:** If you see warnings in the logs, installing `dmidecode` often clears them up:
  
```Bash
sudo pacman -S dmidecode
```
  
- **Better Windows Performance:** If you are installing Windows 10 or 11, install these tools to allow for better resolution and USB support:

```Bash
sudo pacman -S spice-vdagent usbredir
```
  

### Ready to Virtualize?

You now have a powerful, industry-standard hypervisor running on your Arch machine. Whether you are testing new distros, running a Windows instance for gaming, or learning server management, KVM is the way to do it.

Happy virtualizing!
