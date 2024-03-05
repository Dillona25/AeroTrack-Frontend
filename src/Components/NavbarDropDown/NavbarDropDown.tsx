import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import Avatar from "../../images/Hiker.avif";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  handleContactModal?: () => void;
};

export const NavDropDown = (props: menuProps) => {
  let location = useLocation();
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
            <div className="flex items-center gap-4">
              <img
                src={Avatar}
                alt="profile Image"
                className="w-[50px] h-[50px] rounded-[50%]"
              ></img>
              <h1 className="text-[18px] font-normal">Hello, Dillon</h1>
            </div>
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
              <Link
                to="/SavedArticles"
                className="p-2 text-[14px] text-center bg-[#dbdbdb] mx-4 rounded-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              >
                Saved Articles
              </Link>
              <NavButton text="Your profile" />
              <NavButton onClick={props.handleContactModal} text="Contact" />
              <NavButton text="About the creator" />
              <Button text="Logout" className="max-w-[288px] bg-red-500" />
            </>
          ) : (
            <>
              <NavButton onClick={props.handleContactModal} text="Contact" />
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
