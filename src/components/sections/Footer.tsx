import { MapPinned, Phone, Mail } from "lucide-react";
import { textFooterStyle, iconsFooterStyle } from "../ui/styles/styles";

const Footer = () => {
  return (
    <footer className="bg-primary text-detail w-full pb-20 ">
      <div className="xl:w-[86%] w-[94%]  mx-auto h-px bg-gray-600 opacity-40 xl:mb-20 mb-12" />
      <div className="flex xl:w-[86%] w-[94%] mx-auto flex-col xl:flex-row justify-between gap-8 relative px-2">
        <div className="flex flex-col xl:w-[70%] items-start gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <MapPinned className={iconsFooterStyle} />
              <p className={textFooterStyle}>
                Av. Gervaso 377, Capitán Bermúdez, Santa Fe.
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <Phone className={iconsFooterStyle} />
              <p className={textFooterStyle}>(0341) 6030702 - Denis Germán.</p>
            </div>
            <div className="flex flex-row gap-2">
              <Phone className={iconsFooterStyle} />
              <p className={textFooterStyle}>(0341) 6950630 - Rossi Ricardo.</p>
            </div>
            <div className="flex flex-row gap-2">
              <Mail className={iconsFooterStyle} />
              <p className={textFooterStyle}>operaciones@navalparana.com.ar</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end ">
          <div className="flex flex-row gap-2">
            <img
              src="/img/footer/prefectura-escudo.png"
              alt="Prefectura Naval"
              width={120}
              height={120}
              className="object-contain"
            />
            <img
              src="/img/footer/datafiscal.jpg"
              alt="datafiscal"
              width={58}
              height={58}
              className="object-contain"
            />
          </div>
          <p className="text-sm mt-6 ">
            Diseñado y desarrollado por{" "}
            <a
              href="https://portfoliojuanmarino.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-secondary hover:text-highlight transition"
            >
              Juan Marino
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
