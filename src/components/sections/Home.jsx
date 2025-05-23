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

          <p className="md:text-2xl text-gray-400 text-lg mb-5 max-w-lg mx-auto text-center">
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
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://github.com/Romain1309"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition duration-300 hover:bg-[#a855f7] border-[#a855f7] group"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 transition duration-300 group-hover:fill-white fill-[#a855f7]"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.03c-3.338.726-4.033-1.61-4.033-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/romain-gardet-2a119626a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition duration-300 hover:bg-[#c026d3] border-[#c026d3] group"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 transition duration-300 group-hover:fill-white fill-[#c026d3]"
              >
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.45c-1.14 0-1.87-.78-1.87-1.76 0-.99.75-1.76 1.9-1.76s1.87.77 1.88 1.76c0 .98-.74 1.76-1.91 1.76zM20.44 20h-3.56v-5.74c0-1.44-.52-2.42-1.82-2.42-1 .01-1.6.68-1.86 1.34-.09.22-.11.52-.11.83V20H9.55s.05-9.62 0-10.62h3.56v1.5c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.09 1.53 4.09 4.84V20z" />
              </svg>
            </a>

            <a
              href="mailto:romain.gardet.1@ulaval.ca"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition duration-300 hover:bg-[#ec4899] border-[#ec4899] group"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 transition duration-300 group-hover:fill-white fill-[#ec4899]"
              >
                <path d="M12 13.065L.012 4.227A2.01 2.01 0 012 2h20a2.01 2.01 0 011.988 2.227L12 13.065zM0 6.879V20a2 2 0 002 2h20a2 2 0 002-2V6.879L12 16.5 0 6.879z" />
              </svg>
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
