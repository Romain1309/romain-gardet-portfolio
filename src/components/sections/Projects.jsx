import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">TryHackMe Training</h3>
              <p className="text-gray-400 mb-4">
                Ongoing training on real-world cybersecurity scenarios:
                enumeration, privilege escalation, web attacks, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Cybersecurity",
                  "Linux",
                  "CTF",
                  "Nmap",
                  "Reverse Engineering",
                  "OSINT",
                  "Pentest",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <img
                  src="https://tryhackme-badges.s3.amazonaws.com/Yhackato.png"
                  alt="TryHackMe Badge"
                  className="w-32"
                />
                <a
                  href="https://tryhackme.com/p/Yhackato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Profile →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Name of projects 1</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ullam harum exercitationem, adipisci suscipit voluptas
                officia, omnis neque provident quas obcaecati tenetur at. Vel,
                laudantium voluptates assumenda illum nihil in.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Skills1", "Skills2", "Skills3", "Skills4"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="google.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  {" "}
                  View Project →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
