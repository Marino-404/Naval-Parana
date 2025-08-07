import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Button = ({
  children = "Click aquí",
  onClick = () => {},
  className = "",
  icon = <BsArrowRightShort size={24} />,
  disabled = false,
  colorOnScroll = false,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!colorOnScroll) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [colorOnScroll]);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        cursor-pointer
        xl:text-md
        text-s
        z-12
        xl:px-6
        px-5
        py-2
        rounded-full
        shadow-lg
        font-normal
        flex
        items-center
        gap-1
        transition-colors
        duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${scrolled ? "bg-[#3981c9] text-white" : "bg-secondary text-detail"}
        ${className}
      `}
      onMouseEnter={(e) => {
        if (!disabled)
          e.currentTarget.classList.add("bg-blue-700", "text-white");
      }}
      onMouseLeave={(e) => {
        if (!disabled)
          e.currentTarget.classList.remove("bg-blue-700", "text-white");
      }}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
