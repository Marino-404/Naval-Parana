import { useAppState } from "../../store/app-state";
import { aboutTextContent } from "../../utils/text-content";
import AboutImage from "../../../public/img/about2.png";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";

const About = () => {
  const { lang } = useAppState();

  return (
    <section className="relative w-full flex flex-col items-center text-white gap-6 px-4 sm:px-6 pb-20">
      <img
        src={AboutImage}
        alt="Naval Paraná - fondo"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="absolute  inset-0 bg-[#021d3d]/80 z-10" />

      <div className="relative xl:mt-58 mt-40 z-10 text-center max-w-4xl">
        <h1 className="text-6xl sm:text-5xl xl:text-7xl font-bold text-detail mb-4 tracking-wide uppercase">
          {aboutTextContent(lang).title}
        </h1>

        <div className="text-base sm:text-lg xl:text-xl flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-detail">
          <h2 className="custom-font-montserrat font-light">
            {aboutTextContent(lang).subtitle}
          </h2>
          <span className="text-secondary font-bold">
            <Typewriter
              words={[
                lang ? "Ingeniería." : "Engineering.",
                lang ? "Reparaciones portuarias." : "Port Repairs.",
                lang ? "Montajes." : "Assemblies.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={3000}
            />
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-2 sm:mt-6 xl:mb-32 mb-24">
        <Button>
          {lang ? "Disponibilidad inmediata" : "Immediate Availability"}
        </Button>
      </div>
    </section>
  );
};

export default About;
