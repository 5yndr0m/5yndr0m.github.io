export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-nord8 mb-6">About Me</h2>
                    <div className="prose prose-invert prose-lg text-nord4/90 max-w-none space-y-4">
                        <p>
                            Hi, I&apos;m <strong className="text-nord9">Senal Dilanjana</strong> (aka{" "}
                            <strong className="text-nord9">Syndrom</strong>), a 4th year undergraduate at the
                            University of Vavuniya, Sri Lanka, pursuing a BSc in Information Technology. I enjoy
                            hiking, sightseeing, and wandering outdoors. While I&apos;m not obsessed with coding, I love
                            testing programs, breaking things, and exploring how systems work.
                        </p>
                        <p>
                            My main interests are in <strong className="text-nord13">cybersecurity</strong>,{" "}
                            <strong className="text-nord13">software/hardware security</strong>,{" "}
                            <strong className="text-nord13">networking</strong>, <strong className="text-nord13">testing</strong>,{" "}
                            <strong className="text-nord13">Linux</strong>, and <strong className="text-nord13">automation</strong>.
                            I&apos;m self-studying these areas and always eager to learn more.
                        </p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h3 className="text-2xl font-semibold text-nord9 mb-4">Skills & Tools</h3>
                        <ul className="space-y-2 text-nord4">
                            <li className="flex items-start">
                                <span className="text-nord14 mr-2">▹</span>
                                <span>
                                    <strong>Programming:</strong> JavaScript, Java, Python, Bash, C++, C (learning)
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-nord14 mr-2">▹</span>
                                <span>
                                    <strong>Platforms:</strong> Arch Linux (with Hyprland), Docker, n8n automation
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-nord14 mr-2">▹</span>
                                <span>
                                    <strong>Security:</strong> Cybersecurity research, software/hardware testing
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-nord14 mr-2">▹</span>
                                <span>
                                    <strong>Networking & Linux:</strong> Networking basics, Linux tinkering, automation
                                </span>
                            </li>
                        </ul>
                    </section>

                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-semibold text-nord9 mb-4">Currently</h3>
                            <ul className="space-y-2 text-nord4">
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Conducting cybersecurity research
                                </li>
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Building a Rust project for fun and learning
                                </li>
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Looking for collaborations and work opportunities
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold text-nord9 mb-4">Interests</h3>
                            <ul className="space-y-2 text-nord4">
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Hiking, sightseeing, wandering outdoors
                                </li>
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Testing, breaking, and exploring programs
                                </li>
                                <li className="flex items-start">
                                    <span className="text-nord14 mr-2">▹</span>
                                    Learning about security, networking, and automation
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
