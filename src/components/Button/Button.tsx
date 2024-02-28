import "../../vendor/fonts.css";

// Creating an object to specify the type of each prop, this ensure we dont pass the wrong type down the line
type Props = {
  text: string;
  className?: string;
};

// "React.FC" stand for functional component so here I am defining that this is a functional component and I am deifning props directly in our parameters
export const Button = ({ text, className }: Props) => {
  return (
    <button
      type="submit"
      className={`w-[288px] m-auto py-4 text-center bg-[#2F71E5] text-white font-Roboto rounded-[20px] hover:scale-105 ease-in-out duration-500 ${className}`}
    >
      {text}
    </button>
  );
};
