import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailWindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "C++"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-autp px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ea necessitatibus itaque est velit, obcaecati ullam
              asperiores, eum eius fugit doloremque dolorem accusamus tempora,
              nihil molestias iure impedit. Omnis, laborum!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Lorem</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Lorem</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor's degree in Computer Science</strong> -
                  Université Laval, Canada
                  <br /> (2024-Present)
                </li>
                <li>
                  <strong>Engineering School in Computer Science</strong> -
                  CyTech, France
                  <br /> (2020-2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300w">
                <div>
                  <h4 className="font-semibold">
                    Team Leader - Jack and Jones
                    <br /> (Feb 2024 - Present)
                  </h4>
                  <p>
                    - Development of ready-to-wear sales techniques <br />
                    - Customer relations <br />
                    - Drawing up game plans and managing the team to achieve
                    objectives
                    <br />
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Expert Service Factor
                    <br />
                    (Sep 2023 - Dec 2023)
                  </h4>
                  <p>
                    - Area manager for mail sorting and distribution <br />
                    - Direct intermediary between center manager and mail
                    carriers
                    <br />
                    - Training factors to ensure continuity of service and
                    replace them <br />
                    - Assist the manager in decision-making
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
