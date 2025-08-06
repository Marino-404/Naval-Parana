const SectionDivider = ({ label }: { label: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full mt-12 xl:mt-18 mb-20 xl:mb-20">
      <div className="w-full h-px bg-gray-600 opacity-40" />
      <span className="absolute px-4 text-xs xl:text-base text-detail font-light tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
};

export default SectionDivider;
