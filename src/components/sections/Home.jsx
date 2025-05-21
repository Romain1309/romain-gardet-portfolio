import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation(); // Hook pour les traductions

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent leading-right">
            {t("homeTitle")}
          </h1>

          <p className="md:text-2xl text-gray-400 text-lg mb-2 max-w-lg mx-auto text-center">
            {t("homeDesc")}
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {t("viewProjects")}
            </a>
            <a
              href="#contact"
              className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-purple-500/10"
            >
              {t("contactMe")}
            </a>
          </div>
          <p className="text-gray-400 italic text-base max-w-lg mx-auto text-center mt-3">
            {t("tempHomeDesc")}
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
