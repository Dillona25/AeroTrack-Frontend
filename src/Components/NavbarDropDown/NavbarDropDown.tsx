import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

type navProps = {
  text?: string;
  onClick?: MouseEventHandler;
};

type menuProps = {
  isLoggedIn?: boolean;
  onClick?: MouseEventHandler;
  closeModal?: () => void;
  handleSignInModal?: () => void;
  handleSignUpModal?: () => void;
};

export const NavDropDown = (props: menuProps) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-lg">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 z-10 py-5 w-full bg-[#fcfcfc] rounded-b-lg"
      >
        <div className="mx-4 mb-6 flex justify-between">
          {props.isLoggedIn ? (
            <h1 className="text-[18px] font-normal">Hello, Dillon</h1>
          ) : (
            <h1 className="text-[18px] font-normal">Hello...</h1>
          )}
          {/* If user is logged in disyapled their name */}
          {/* <h1 className=" text-black text-[18px] font-normal">Hello, Dillon</h1> */}
          <button
            onClick={props.closeModal}
            className="bg-closeIcon h-6 w-6"
          ></button>
        </div>
        <ul className="flex flex-col gap-3 text-black">
          {/* Only display this button to unauthorized users */}
          {props.isLoggedIn ? (
            <>
              <NavButton text="Home" />
              <NavButton text="Your Profile" />
              <NavButton text="Saved Articles" />
              <NavButton text="Contact" />
              <NavButton text="About the creator" />
              <Button text="Logout" className="max-w-[288px] bg-red-500" />
            </>
          ) : (
            <>
              <NavButton text="Home" />
              <NavButton text="Contact" />
              <NavButton text="About the creator" />
              <Button
                onClick={props.handleSignInModal}
                text="Signin"
                className="bg-black max-w-[288px]"
              />
              <p className="text-[14px] font-normal text-center pt-1">
                No Account? Signup{" "}
                <button onClick={props.handleSignUpModal} className="underline">
                  here
                </button>
              </p>
            </>
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export const NavButton = ({ text, onClick }: navProps) => {
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
