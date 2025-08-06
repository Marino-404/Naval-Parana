import { BsArrowRightShort } from "react-icons/bs";

const Button = ({
  children = "Click aquí",
  onClick = () => {},
  className = "",
  icon = <BsArrowRightShort size={24} />,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer md:text-md text-md  z-12 md:px-6 px-5 py-3 bg-secondary text-detail font-normal rounded-full shadow-lg hover:bg-[#3981c9] transition duration-300 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
