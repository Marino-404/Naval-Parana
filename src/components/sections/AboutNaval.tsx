import { aboutNavalTextContent } from "../../utils/text-content";
import aboutnaval from "../../../public/img/aboutnaval.jpg";
import { useAppState } from "../../store/app-state";

const AboutNaval = () => {
  const { lang } = useAppState();

  return (
    <section className="w-full bg-primary py-20">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-start xl:gap-12 gap-6 px-6 xl:px-16">
        <img
          src={aboutnaval}
          alt="Sobre Naval Paraná"
          className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl"
        />

        {/* Speech bubble */}
        <div className="text-start justify-start relative bg-gradient-to-br from-detail to-[#b6c8d9] rounded-lg border-2 border-primary xl:pr-12 xl:pl-5 xl:pt-8 xl:pb-12 x pl-6 pr-12 py-12 transition-all duration-300 border-solid border-secondary shadow-lg hover:shadow-xl  text-primary max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Sobre nosotros</h2>
          <p className="text-md leading-relaxed">
            {aboutNavalTextContent(lang).h1}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNaval;
