import SectionDivider from "./SectionDivider";
import { useAppState } from "../../store/app-state";

const customers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/img/customers/customers${i + 1}.png`,
  alt: `Customer ${i + 1}`,
}));

const Customers = () => {
  const { lang } = useAppState();
  return (
    <section className="relative xl:w-[80%] w-full mx-auto flex flex-col items-center text-white mb-24">
      <SectionDivider label={lang ? "Clientes" : "Customers"} />

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 px-8 gap-12 w-full max-w-7xl">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center justify-center rounded-lg border-1 border-gray-600 opacity-40 px-5 py-5"
          >
            <img
              src={customer.src}
              alt={customer.alt}
              className="max-h-16 sm:max-h-20 xl:max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
