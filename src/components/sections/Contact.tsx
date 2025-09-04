import Button from "../ui/Button";
import { useAppState } from "../../store/app-state";
import { contactTextContent } from "../../utils/text-content";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Location from "../ui/Location";

const Contact = () => {
  const { lang } = useAppState();

  const phoneNumber = "+54 9 3416 03-0702";
  const whatsappNumber = "5493416030702";
  const email = "operaciones@navalparana.com.ar";

  const telLink = `tel:${phoneNumber}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const mailtoLink = `mailto:${email}`;

  return (
    <section
      id="contact"
      className="relative w-full mx-auto pb-28  flex flex-col   bg-primary text-detail"
    >
      <div className="xl:w-[86%] w-[94%]  mx-auto h-px bg-gray-600 opacity-40 xl:my-20 my-12" />

      <div className="flex flex-col w-[94%] xl:w-[86%] mx-auto justify-start">
        <h1 className="mb-4 xl:text-6xl text-2xl font-bold tracking-wide text-start  drop-shadow-sm max-w-3xl">
          {contactTextContent(lang).h1}
        </h1>

        <p className="mb-12 max-w-2xl text-start text-lg font-light text-detail/80">
          {contactTextContent(lang).subtitle}
        </p>
      </div>

      <div className="xl:w-[86%] w-[94%] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 justify-start  mb-12">
        <button
          onClick={() => window.open(telLink, "_self")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-sm shadow-md
             text-detail bg-black/45 backdrop-blur-md cursor-pointer hover:bg-black/35"
          aria-label={lang ? "Llamar" : "Call"}
        >
          <Phone size={20} />
          {lang ? "Llamar" : "Call"}
        </button>

        <button
          onClick={() => window.open(whatsappLink, "_blank")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-sm shadow-md
             text-detail bg-black/45 backdrop-blur-md cursor-pointer hover:bg-black/35"
          aria-label={lang ? "WhatsApp" : "WhatsApp"}
        >
          <MessageCircle size={20} />
          {lang ? "WhatsApp" : "WhatsApp"}
        </button>
        <button
          onClick={() => window.open(mailtoLink, "_self")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-xs shadow-md
             text-detail bg-black/45 backdrop-blur-md cursor-pointer hover:bg-black/35"
          aria-label={lang ? "Enviar correo" : "Send Email"}
        >
          <Mail size={20} />
          {lang ? "Enviar correo" : "Send Email"}
        </button>
      </div>
      <Location />
    </section>
  );
};

export default Contact;
