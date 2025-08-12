import SectionDivider from "./SectionDivider";
import { useAppState } from "../../store/app-state";
import Button from "./Button";
import { useState, useEffect } from "react";

const MENU_HEIGHT = 80; // Ajusta este valor a la altura real de tu header fijo

const Location = () => {
  const { lang } = useAppState();

  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      setMinHeight(window.innerHeight - MENU_HEIGHT);
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      id="five"
      className="relative xl:w-[80%] w-full mx-auto  flex flex-col items-center text-detail"
      style={{
        paddingTop: MENU_HEIGHT,
        minHeight: minHeight,
        boxSizing: "border-box",
      }}
    >
      <SectionDivider label={lang ? "Ubicación" : "Location"} />

      <div className="xl:w-[80%] w-full h-[450px] px-4 xl:px-0 gap-4 flex flex-col items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d419.11634088217585!2d-60.730529964366646!3d-32.820600396211276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ5JzE0LjAiUyA2MMKwNDMnNDkuOSJX!5e0!3m2!1ses!2sar!4v1754516170337!5m2!1ses!2sar"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-sm"
        ></iframe>
        <Button
          className="mt-4"
          onClick={() => (
            window.open(
              "https://www.google.com/maps/place/32%C2%B049'14.0%22S+60%C2%B043'49.9%22W/@-32.8206004,-60.73053,20z/data=!4m4!3m3!8m2!3d-32.820562!4d-60.730525?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            ),
            true
          )}
        >
          Google Maps
        </Button>
      </div>
    </section>
  );
};

export default Location;
