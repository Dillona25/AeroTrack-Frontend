import "../../Vendor/Fonts.css";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

// When passing a function prop, on the recieving end, set the type as void
type NavDropDownProps = {
  closeDropDown: () => void;
};

export const NavDropDown = ({ closeDropDown }: NavDropDownProps) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-lg">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 z-10 py-5 w-full bg-[#fcfcfc] rounded-b-lg"
      >
        <div className="mx-4 mb-4 text-black font-Roboto flex justify-between">
          <h1>Hello, Dillon</h1>
          <button
            onClick={closeDropDown}
            className="bg-closeIcon h-6 w-6 hover:scale-[130%] ease-in-out duration-500"
          ></button>
        </div>
        <ul className="flex flex-col gap-2 font-Roboto text-black">
          <NavButton text="Home" onClick={closeDropDown} />
          <NavButton text="Your Profile" />
          <NavButton text="Suggested Reads" />
          <NavButton text="About the creator" />
          <NavButton text="Contact" />
          <Button text="Sign in" className="bg-black font-Roboto" />
        </ul>
      </motion.div>
    </div>
  );
};

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const NavButton = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="p-2 font-Roboto text-[14px] bg-[#dbdbdb] mx-4 rounded-[10px] hover:scale-[103%] ease-in-out duration-500"
    >
      {text}
    </button>
  );
};
