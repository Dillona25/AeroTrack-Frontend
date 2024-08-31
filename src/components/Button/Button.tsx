import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";

// Creating an object to specify the type of each prop, this ensure we dont pass the wrong type down the line
type Props = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  type?: string;
};

// "React.FC" stand for functional component so here I am defining that this is a functional component and I am deifning props directly in our parameters
export const Button = ({ text, className, disabled, onClick }: Props) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`w-full m-auto py-4 text-center bg-[#2F71E5] text-white rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className}`}
    >
      {text}
    </button>
  );
};
