import { useAppState } from "../../store/app-state";
import { aboutTextContent } from "../../utils/text-content";
import AboutImage from "../../../public/img/about2.png";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ServicesSection from "../ui/Services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const About = () => {
  const { lang } = useAppState();

  const [scrollY, setScrollY] = useState(0);

  const scrollToContact = () => {
    const el = document.getElementById("six");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlayOpacity = Math.min(0.85 + scrollY / 800, 1); // capa base más oscura y más opaca con scroll

  return (
    <>
      <section
        id="home"
        className="relative xl:h-[100vh] h-auto w-full flex flex-col items-center justify-center text-white gap-6   overflow-hidden bg-primary "
        // agregamos bg-primary al contenedor para que el fondo que se ve sea ese color
      >
        <img
          src={AboutImage}
          alt="Naval Paraná - fondo"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100"
        />

        {/* Capa oscura con opacidad base más alta */}
        <div
          className="absolute inset-0 bg-primary z-10"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div
          className="relative xl:w-[86%] w-[94%]  z-10  justify-start text-start pt-40 xl:pt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl  xl:text-8xl font-bold text-detail mb-4 tracking-wide uppercase"
            variants={fadeUp}
          >
            {aboutTextContent(lang).title}
          </motion.h1>

          <motion.div
            className="text-base sm:text-lg xl:text-xl flex flex-col sm:flex-row items-start gap-1 sm:gap-2 text-detail "
            variants={fadeUp}
          >
            {/* Texto estático */}
            <h2 className="custom-font-montserrat font-light mr-1 opacity-80">
              {aboutTextContent(lang).subtitle}
            </h2>

            {/* Texto dinámico */}
            <span className="text-secondary text-start font-bold">
              <Typewriter
                words={
                  lang
                    ? [
                        "ingeniería.",
                        "seguridad.",
                        "innovación.",
                        "eficiencia.",
                        "sostenibilidad.",
                      ]
                    : [
                        "engineering.",
                        "safety.",
                        "innovation.",
                        "efficiency.",
                        "sustainability.",
                      ]
                }
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={20}
                delaySpeed={3000}
              />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative xl:w-[86%] w-[94%] flex justify-start  z-10 mt-2 sm:mt-6 xl:mb-8"
          variants={fadeUp}
        >
          <Button onClick={scrollToContact}>
            {lang ? "Disponibilidad inmediata" : "Immediate Availability"}
          </Button>
        </motion.div>
        <ServicesSection />
      </section>
    </>
  );
};

export default About;
