import { useTranslation } from "react-i18next";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      >
        {t("navbar.home")}
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      >
        {t("navbar.about")}
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      >
        {t("navbar.projects")}
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300"
      >
        {t("navbar.contact")}
      </a>
      <button
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
          setMenuOpen(false);
        }}
        className="mt-8 text-white text-base border border-purple-500 px-4 py-2 rounded hover:bg-purple-500/20 transition cursor-pointer"
      >
        {i18n.language === "en" ? "FR" : "EN"}
      </button>
    </div>
  );
};
