import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { currentUser } from "../App";

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
  handleProfileModal?: () => void;
  handleLogoutConfirm?: () => void;
  avatarUrl?: string;
  currentUser?: currentUser | null;
};

export const NavDropDown = (props: menuProps) => {
  const location = useLocation();
  return (
    <nav className="fixed inset-0 z-50 backdrop-blur-lg">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 z-10 py-5 w-full bg-[#fcfcfc] rounded-b-lg"
      >
        <div className="mx-4 mb-6 flex justify-between">
          {/* If the user is logged in we greet them by name, otherwise we do but not by name */}
          {props.isLoggedIn ? (
            <div className="flex items-center gap-4">
              <img
                src={props.currentUser?.avatar}
                alt="profile Image"
                className="w-[50px] h-[50px] object-cover rounded-[50%]"
              />
              <h1 className="text-[18px] font-normal">
                Hello, {props.currentUser?.name}
              </h1>
            </div>
          ) : (
            <h2 className="text-[18px] font-normal">Hello...</h2>
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
              {/* Show these elements only in the saved articles route */}
              {location.pathname === "/SavedArticles" && (
                <Link
                  to="/"
                  onClick={props.closeModal}
                  className="p-2 text-[14px] text-center bg-[#dbdbdb] mx-4 rounded-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                >
                  Home
                </Link>
              )}
              {location.pathname === "/" && (
                <Link
                  to="/SavedArticles"
                  onClick={props.closeModal}
                  className="p-2 text-[14px] text-center bg-[#dbdbdb] mx-4 rounded-[10px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                >
                  Saved Articles
                </Link>
              )}
              <NavButton
                onClick={props.handleProfileModal}
                text="Your profile"
              />
              <Button
                onClick={props.handleLogoutConfirm}
                text="Logout"
                className="max-w-[288px] bg-red-500"
              />
            </>
          ) : (
            <>
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
    </nav>
  );
};

// Reusable Nav button to save repeated className code
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
