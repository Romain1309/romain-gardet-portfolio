import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const softSkills = [
    "Autonomy",
    "Leadership",
    "Communication",
    "Fast Learning",
    "Reliability",
  ];

  const techSkills = ["Python", "C++", "SQL",  "HTML", "CSS", "JS", "VBA"];

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
              <p className="text-gray-300 mb-6 text-justify">
                I'm a computer science student with a strong interest in
                cybersecurity. Through my studies in France and Canada, I’ve
                built solid foundations in programming and teamwork, especially
                through hands-on school projects. My student jobs have also
                helped me develop key soft skills like communication,
                adaptability, and leadership. I’m curious, motivated, and always
                looking to learn something new — both in tech and in life.
              </p>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Soft skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tech, key) => (
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
                <h3 className="text-xl font-bold mb-4">Technical skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((tech, key) => (
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
                  <strong>
                    Bachelor's degree in Computer Science – Université Laval,
                    Canada
                  </strong>
                  <br />{" "}
                  <span className="text-sm text-gray-400">(2024-Present)</span>
                  <p>
                    Currently expanding my expertise in computer science, with a
                    strong emphasis on cybersecurity. I'm also gaining deeper
                    insights into AI and databases, while engaging in numerous
                    collaborative projects.
                  </p>
                </li>
                <li>
                  <strong>
                    Engineering School in Computer Science – CyTech, France
                  </strong>
                  <br />{" "}
                  <span className="text-sm text-gray-400">(2020 - 2023)</span>
                  <p>
                    Acquired solid foundations in algorithms, data structures,
                    systems programming, and mathematics. Completed several team
                    projects and developed strong problem-solving and
                    collaboration skills.
                  </p>
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
                    Product qualification - Idemia <br />
                    (Aug 2023 - Sep 2023)
                  </h4>
                  <p>
                    - Biometric product testing and associated report writing
                    <br />- Script programming for product testing campaign
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Process automation by scripting - Idemia <br />
                    (July 2022 - Sep 2022)
                  </h4>
                  <p>
                    - Script programming to automate data migration to a new
                    project management system
                    <br />- Assistance to project managers in the implementation
                    of a new data management system.
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
