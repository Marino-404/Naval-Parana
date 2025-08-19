import CardServices from "../ui/CardServices";
import { ChevronRight } from "lucide-react";
import { useAppState } from "../../store/app-state";
import CardServices1 from "../ui/CardServices1";

const ServicesSection = () => {
  const { lang } = useAppState();

  return (
    <section id="services" className="w-full bg-primary py-24">
      <div className=" z-10 xl:w-[86%] w-[94%] h-auto justify-center mx-auto flex flex-col gap-6">
        <div className="xl:text-6xl text-3xl font-bold tracking-wide text-start  drop-shadow-sm  text-detail flex flex-row items-center justify-start">
          <ChevronRight className="w-8 h-8 text-secondary transition-colors duration-300 flex " />
          <h1>{lang ? "Servicios" : "Services"}</h1>
        </div>
        <CardServices />
        <CardServices1 />
      </div>
    </section>
  );
};

export default ServicesSection;
