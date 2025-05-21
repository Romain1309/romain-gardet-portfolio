import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent text-center">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.thm.title")}
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                {t("projects.thm.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {t("projects.thm.tags", { returnObjects: true }).map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://tryhackme.com/p/Yhackato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {t("projects.thm.link")}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.bank-project.title")}
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                {t("projects.bank-project.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {t("projects.bank-project.tags", { returnObjects: true }).map(
                  (tag, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow transition"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GIF-1003-H2025/tp3-integration-travail-en-quipe-equipe10/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  {t("projects.bank-project.link")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
