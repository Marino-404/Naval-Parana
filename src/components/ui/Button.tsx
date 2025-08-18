import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
  className = "",
  icon = <BsArrowRightShort size={24} />,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        cursor-pointer
        text-sm xl:text-xl
        z-12
        px-5 xl:px-8
        py-2
        rounded-xs
        shadow-lg
        font-normal
        flex
        items-center
        gap-1
        transition-colors
        duration-300
        bg-secondary
        text-detail
        hover:bg-secondary/80
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
