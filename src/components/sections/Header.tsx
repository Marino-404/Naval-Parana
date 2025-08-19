import { useAppState } from "../../store/app-state";
import Logo from "../../../public/img/logo.png";
import { headerTextContent } from "../../utils/text-content";
import { navStyles } from "../ui/styles/styles";
import { HiLanguage } from "react-icons/hi2";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useSectionObserver } from "../../hooks/useSectionObserver";

const Header = () => {
  const { lang, changeLang, currentSection, setCurrentSection, setNavActive } =
    useAppState();
  const isScrolled = useScrollPosition(30);

  useSectionObserver(["home", "about", "services", "equipment", "contact"]);

  const {
    showMenu,
    shouldRenderMenu,
    menuAnimatingOut,
    toggleMenu,
    setShowMenu,
  } = useMobileMenu();

  const navItems = [
    { id: "home", label: headerTextContent(lang).home },
    { id: "about", label: headerTextContent(lang).sobreNosotros },
    { id: "services", label: headerTextContent(lang).trabajos },
    { id: "equipment", label: headerTextContent(lang).equipo },
    { id: "contact", label: headerTextContent(lang).contacto },
  ];

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setNavActive(true);
    setShowMenu(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const headerClasses = [
    "xl:w-[90%] w-full z-30 transition-all duration-500 ease-in-out fixed xl:top-2 left-1/2 -translate-x-1/2 xl:rounded-full text-detail font-normal",
    (isScrolled || showMenu) && "xl:w-[50%] bg-black/45 backdrop-blur-md",
    "xl:h-18 h-18",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between w-full xl:px-8 px-2  h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 h-full">
          <img
            src={Logo}
            alt="Logo"
            onClick={scrollToTop}
            className="h-10 xl:h-12 cursor-pointer"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex  h-full items-center gap-14">
          {/* Botón idioma en desktop */}

          <ul className="flex flex-row items-center gap-14">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${navStyles} text-detail transition-colors font-normal text-md hover:text-secondary ${
                    currentSection === id ? "text-secondary" : ""
                  }`}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <span
            className="cursor-pointer hover:text-secondary text-detail transition-colors"
            onClick={() => changeLang(!lang)}
          >
            <HiLanguage className="w-6 h-6" />
          </span>
        </nav>

        {/* Botón idioma + menú en mobile */}
        <div className="flex items-center gap-4 flex-shrink-0 h-full xl:hidden">
          <span
            className="cursor-pointer hover:text-secondary text-detail transition-colors"
            onClick={() => changeLang(!lang)}
          >
            <HiLanguage className="w-6 h-6" />
          </span>

          <button
            className="text-detail relative w-6 h-4 flex flex-col justify-between items-center group z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
                showMenu ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-detail transition-all duration-300 ease-in-out ${
                showMenu ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
                showMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {shouldRenderMenu && (
        <nav
          className={`fixed top-[72px] left-0 w-full rounded-md h-[calc(100vh-72px)] bg-primary text-detail flex flex-col items-start pl-12 gap-6 pt-10 text-xl xl:hidden z-10 ${
            menuAnimatingOut ? "slide-up" : "slide-down"
          }`}
        >
          <ul className="flex flex-col gap-6">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${navStyles} text-detail ${
                    currentSection === id ? "text-secondary font-normal" : ""
                  }`}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-[50px] pl-12 left-0 text-xl font-normal text-detail">
            Naval Paraná
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
