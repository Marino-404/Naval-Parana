import { useAppState } from "../../store/app-state";
import { ChevronRight } from "lucide-react";

const customers = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/img/customers/customers${i + 1}.png`,
  alt: `Customer ${i + 1}`,
}));

const Customers = () => {
  const { lang } = useAppState();

  const logos = [...customers, ...customers];

  return (
    <section className="relative w-full flex flex-col items-center bg-primary text-detail">
      <div className="xl:w-[86%] w-[94%] mx-auto h-px bg-gray-600 opacity-40 xl:my-20 my-12" />
      <div className="xl:w-[86%] w-[94%] overflow-hidden flex flex-col gap-12">
        <div className="xl:text-6xl text-3xl font-bold tracking-wide text-start drop-shadow-sm text-detail flex flex-row items-center justify-start">
          <ChevronRight className="w-8 h-8 text-secondary transition-colors duration-300 flex" />
          <h1>{lang ? "Clientes" : "Customers"}</h1>
        </div>
        <div className="  marquee">
          {logos.map((customer, idx) => (
            <div
              key={idx}
              className="marquee-item flex-shrink-0 flex items-center justify-center w-38 sm:w-64 h-20 sm:h-32 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-xs px-3 sm:px-5 py-2 sm:py-3"
            >
              <img
                src={customer.src}
                alt={customer.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
