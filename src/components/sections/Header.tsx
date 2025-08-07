import { useAppState } from "../../store/app-state";
import Logo from "../../../public/img/logo.png";
import { headerTextContent } from "../../utils/text-content";
import { navStyles } from "../ui/styles/styles";
import { useEffect, useState } from "react";
import { HiLanguage } from "react-icons/hi2";

const Header = () => {
  const {
    lang,
    changeLang,
    showMenu,
    setShowMenu,
    navActive,
    setNavActive,
    currentSection,
    setCurrentSection,
  } = useAppState();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => changeLang(!lang);
  const toggleMenu = () => setShowMenu(!showMenu);

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setNavActive(true);
    setShowMenu(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (!showMenu) {
        setIsScrolled(window.scrollY > 30);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMenu]);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [menuAnimatingOut, setMenuAnimatingOut] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setShouldRenderMenu(true);
      setMenuAnimatingOut(false);
    } else if (shouldRenderMenu) {
      setMenuAnimatingOut(true);
      const timeout = setTimeout(() => {
        setShouldRenderMenu(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [showMenu]);

  //diferentes clases dependiendo el header activo}

  const baseClasses =
    "w-[100%] font-light z-30 transition-all duration-500 ease-in-out flex items-center justify-between px-6 xl:h-15 h-18 fixed xl:top-2 left-1/2 -translate-x-1/2 xl:rounded-full";
  const scrolledClasses = "xl:w-[86%] bg-black/45 backdrop-blur-md";

  const headerClasses = `${baseClasses} ${
    showMenu ? scrolledClasses : isScrolled ? scrolledClasses : ""
  }`;

  const navItems = [
    { id: "one", label: headerTextContent(lang).one },
    { id: "two", label: headerTextContent(lang).two },
    { id: "three", label: headerTextContent(lang).three },
    { id: "four", label: headerTextContent(lang).four },
    { id: "five", label: headerTextContent(lang).five },
    { id: "six", label: headerTextContent(lang).six },
  ];

  return (
    <header className={headerClasses}>
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 xl:h-10" />
      </div>

      {/* Desktop nav */}
      <nav className="hidden xl:flex text-detail justify-center w-full">
        <ul className="flex flex-row items-center gap-12">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                className={
                  navStyles + (currentSection === id ? " text-secondary" : "")
                }
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {shouldRenderMenu && (
        <nav
          className={`fixed top-[72px] left-0 w-full rounded-md h-[calc(100vh-72px)] bg-primary text-detail flex flex-col items-start pl-12 gap-6 pt-10 text-xl font-light xl:hidden z-10 ${
            menuAnimatingOut ? "slide-up" : "slide-down"
          }`}
        >
          <ul className="flex flex-col gap-6">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={
                    navStyles + (currentSection === id ? " text-secondary" : "")
                  }
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

      <div className="flex items-center gap-4">
        <span
          className="cursor-pointer hover:text-secondary text-detail transition-colors"
          onClick={toggleLanguage}
        >
          <HiLanguage className="w-6 h-6" />
        </span>

        <button
          className="xl:hidden text-detail relative w-6 h-4 flex flex-col justify-between items-center group z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`hover:text-secondary text-detail block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
              showMenu ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`hover:text-secondary text-detail block h-0.5 w-full bg-detail transition-all duration-300 ease-in-out ${
              showMenu ? "opacity-0" : ""
            }`}
          />
          <span
            className={`hover:text-secondary text-detail block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
