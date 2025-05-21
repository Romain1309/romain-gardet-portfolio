import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  const softSkills = [
    t("about.softSkills.autonomy"),
    t("about.softSkills.leadership"),
    t("about.softSkills.communication"),
    t("about.softSkills.fastLearning"),
    t("about.softSkills.reliability"),
  ];

  const techSkills = ["Python", "C++", "SQL","Linux", "HTML", "CSS", "JS", "VBA"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent text-center">
            {t("about.title")}
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-justify">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {t("about.softSkills.title")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {t("about.techSkills.title")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow transition"
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
              <h3 className="text-xl font-bold mb-4">
                {t("about.education.title")}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>{t("about.education.ulaval.title")}</strong>
                  <br />
                  <span className="text-sm text-gray-400">
                    {t("about.education.ulaval.period")}
                  </span>
                  <p>{t("about.education.ulaval.description")}</p>
                </li>
                <li>
                  <strong>{t("about.education.cytech.title")}</strong>
                  <br />
                  <span className="text-sm text-gray-400">
                    {t("about.education.cytech.period")}
                  </span>
                  <p>{t("about.education.cytech.description")}</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {t("about.experience.title")}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {t("about.experience.jack.title")}
                    <br />
                    <span className="text-sm text-gray-400">
                      {t("about.experience.jack.period")}
                    </span>
                  </h4>
                  <p>{t("about.experience.jack.description").split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {t("about.experience.idemia1.title")}
                    <br />
                    <span className="text-sm text-gray-400">
                      {t("about.experience.idemia1.period")}
                    </span>
                  </h4>
                  <p>{t("about.experience.idemia1.description").split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {t("about.experience.idemia2.title")}
                    <br />
                    <span className="text-sm text-gray-400">
                      {t("about.experience.idemia2.period")}
                    </span>
                  </h4>
                  <p>{t("about.experience.idemia2.description").split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
