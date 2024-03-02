import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

type ModalProps = {
  closeModal?: () => void;
  toggle?: () => void;
};

type NavProps = {
  text?: string;
  onClick?: MouseEventHandler;
};

export const NavDropDown = (props: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-lg">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 z-10 py-5 w-full bg-[#fcfcfc] rounded-b-lg"
      >
        <div className="mx-4 mb-4 flex justify-between">
          <h1 className="text-[18px] font-normal">Hello...</h1>
          {/* If user is logged in disyapled their name */}
          {/* <h1 className=" text-black text-[18px] font-normal">Hello, Dillon</h1> */}
          <button
            onClick={props.closeModal}
            className="bg-closeIcon h-6 w-6"
          ></button>
        </div>
        <ul className="flex flex-col gap-2 text-black">
          <NavButton text="Home" />
          <NavButton text="Your Profile" />
          <NavButton text="Saved Articles" />
          <NavButton text="Contact" />
          <NavButton text="About the creator" />
          {/* Only display this button to unauthorized users */}
          <Button text="Signin" className="bg-black mt-2 max-w-[288px]" />
          <p className="text-[14px] font-normal text-center">
            No Account? Signup here
          </p>
        </ul>
      </motion.div>
    </div>
  );
};

export const NavButton = ({ text, onClick }: NavProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="p-2 text-[14px] bg-[#dbdbdb] mx-4 rounded-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      {text}
    </button>
  );
};
