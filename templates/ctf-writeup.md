---
title: ""
description: ""
pubDate: ""
category: "CTF"
heroImage: ""
---

# [Platform] — [Room or Machine Name]
# Examples:
# "TryHackMe — Blue"
# "TryHackMe — Advent of Cyber Day 14: SIEM with Splunk"

<!--
One sentence summary of the machine/room and its difficulty.

Example:
"Blue is a beginner-level Windows room on TryHackMe that covers exploitation
of EternalBlue (MS17-010) using Metasploit."
-->

**Platform:** TryHackMe / HackTheBox
**Difficulty:** Easy / Medium / Hard
**Tags:** (e.g. Windows, SMB, Privilege Escalation)

---

## Reconnaissance

<!--
What did you scan and what did you find? Always show the actual command with flags.
Explain what the flags do if they're not obvious — this shows you understand the tool,
not just copying commands.

Example:
"I started with an nmap service scan across all ports to avoid missing anything
running on non-standard ports."
-->

```bash
nmap -sV -sC -p- -T4 <target-ip>
```

<!--
Paste the relevant portion of the output. Don't paste the whole thing — trim to
what's interesting.
-->

```
PORT    STATE SERVICE VERSION
135/tcp open  msrpc   Microsoft Windows RPC
445/tcp open  microsoft-ds Windows 7 Ultimate 7601 (workgroup: WORKGROUP)
```

<!--
Summarise what stood out and what you decided to investigate next, and why.

Example:
"Port 445 is open and the OS is Windows 7 — EternalBlue is a strong candidate.
I'll check SMB before anything else."
-->

---

## Enumeration

<!--
Digging deeper into what recon found. This is where you narrow the attack surface.
Show the tools and what they revealed.

Common tools here: enum4linux, gobuster, nikto, smbclient, whatweb, etc.
-->

```bash
# example
enum4linux -a <target-ip>
```

```
# relevant output
```

<!--
What did this confirm or rule out? What's your working theory now?
-->

---

## Exploitation

<!--
This is the core section. Be specific:
- What vulnerability are you exploiting?
- Why does it exist?
- What tool or technique are you using?

Example:
"MS17-010 (EternalBlue) is a buffer overflow in SMBv1 that allows remote code
execution without authentication. I'll use Metasploit's exploit/windows/smb/ms17_010_eternalblue module."
-->

```bash
# setup or exploit commands
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS <target-ip>
run
```

```
# output showing successful exploitation
```

<!--
Describe what access you now have and what the next step is.
-->

---

## Post-Exploitation

<!--
What did you do after getting a shell? Privilege escalation, lateral movement,
finding flags, reading sensitive files.

Show the commands. Show where the flags were found.
-->

```bash
# example
whoami
# output: nt authority\system

cat /root/root.txt
# or equivalent for the platform
```

**User flag:** `[flag here or describe where it was]`
**Root flag:** `[flag here or describe where it was]`

---

## What I Learned

<!--
This is the most important section for your portfolio. Write 3–5 honest takeaways.
Not "I learned about EternalBlue" — be specific about what you now understand
that you didn't before.

Example:
- EternalBlue exploits the way Windows SMBv1 handles transaction requests — the
  overflow happens before authentication, which is why it's so dangerous.
- Running nmap with -p- is slow but caught port 3389 (RDP) which the default
  scan missed entirely.
- The meterpreter `hashdump` command requires SYSTEM-level access — I initially
  tried it from a user shell and got an access denied error I didn't understand
  until I checked privileges with `getuid`.
-->

-
-
-

---

## References

<!--
Link the room, any CVEs you used, tools you referenced.
-->

- [Room link](https://tryhackme.com/room/...)
- CVE or exploit reference
