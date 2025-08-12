import SectionDivider from "../ui/SectionDivider";
import Button from "../ui/Button";
import { useAppState } from "../../store/app-state";
import { contactTextContent } from "../../utils/text-content";
import { Phone, Mail, MessageCircle } from "lucide-react";

const MENU_HEIGHT = 80;

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
      id="six"
      className="relative w-full mx-auto pb-28 px-6 flex flex-col items-center bg-primary text-detail"
      style={{
        paddingTop: MENU_HEIGHT,
        boxSizing: "border-box",
      }}
    >
      <SectionDivider label={lang ? "Contacto" : "Contact"} />

      <h1 className="mb-4 xl:text-5xl text-2xl font-bold tracking-wide text-center drop-shadow-sm max-w-3xl">
        {contactTextContent(lang).h1}
      </h1>

      <p className="mb-12 max-w-2xl text-center text-lg font-light text-detail/80">
        {contactTextContent(lang).subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center w-full max-w-3xl">
        <Button
          onClick={() => window.open(telLink, "_self")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-sm shadow-md
             text-detail "
          aria-label={lang ? "Llamar" : "Call"}
        >
          <Phone size={20} />
          {lang ? "Llamar" : "Call"}
        </Button>

        <Button
          onClick={() => window.open(whatsappLink, "_blank")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-sm shadow-md
             text-detail "
          aria-label={lang ? "WhatsApp" : "WhatsApp"}
        >
          <MessageCircle size={20} />
          {lang ? "WhatsApp" : "WhatsApp"}
        </Button>

        <Button
          onClick={() => window.open(mailtoLink, "_self")}
          className="flex-1 flex justify-center items-center gap-3 py-4 text-md font-semibold rounded-sm shadow-md
             text-detail "
          aria-label={lang ? "Enviar correo" : "Send Email"}
        >
          <Mail size={20} />
          {lang ? "Enviar correo" : "Send Email"}
        </Button>
      </div>
    </section>
  );
};

export default Contact;
