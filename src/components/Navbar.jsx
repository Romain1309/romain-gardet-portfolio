import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent"
          >
            Romain Gardet
          </a>

          {/* Bouton burger mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Liens de navigation (desktop) + bouton langue */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 link-glow">{t("navbar.home")}</a>
            <a href="#about" className="text-gray-300 link-glow">{t("navbar.about")}</a>
            <a href="#projects" className="text-gray-300 link-glow">{t("navbar.projects")}</a>
            <a href="#contact" className="text-gray-300 link-glow">{t("navbar.contact")}</a>

            {/* Bouton langue */}
            <button
              onClick={toggleLanguage}
              className="text-sm text-white border border-purple-500 px-3 py-1 rounded hover:bg-purple-500/20 transition cursor-pointer"
            >
              {i18n.language === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
