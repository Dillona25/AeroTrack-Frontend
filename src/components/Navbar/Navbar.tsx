import "../../vendor/fonts.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "../../images/Hiker.avif";

type Props = {
  handleNavMenu?: () => void;
  handleSignInModal?: () => void;
  isLoggedIn?: Boolean;
  handleProfileModal?: () => void;
  handleContactModal?: () => void;
};

export const Navbar = (props: Props) => {
  let location = useLocation();

  return (
    <div>
      {/* This is the Navbar for the exact path */}
      {location.pathname === "/" && (
        <>
          <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab sm:px-[104px] sm:items-center sm:border-opacity-50">
            <p className="text-white font-RobotoSlab sm:text-[20px]">
              AviNews Explorer
            </p>
            <button
              onClick={props.handleNavMenu}
              className="bg-menu border-none h-6 w-6 sm:hidden"
            ></button>
            {/* These buttons only appear on small screens or larger */}
            <div className="hidden items-center sm:flex font-Roboto sm:text-[18px]">
              <button
                onClick={props.handleContactModal}
                className="hidden sm:block mr-[42px]"
              >
                Contact
              </button>
              <button
                onClick={props.handleProfileModal}
                className="hidden sm:block mr-[42px]"
              >
                Profile
              </button>
              {/* if the user is logged in we show saved articles, otherwise we show nothing */}
              {props.isLoggedIn ? (
                <Link
                  to="/SavedArticles"
                  className="text-center hidden sm:block mr-[42px]"
                >
                  Saved Articles
                </Link>
              ) : (
                ""
              )}
              {/* If the user is logged in, we display a button to logout, otherwise we display a sign in button */}
              {props.isLoggedIn ? (
                <button className="hidden sm:block border-white border-[1px] py-3 w-40 rounded-full font-Roboto sm:text-[18px]">
                  Logout
                </button>
              ) : (
                <button
                  onClick={props.handleSignInModal}
                  className="hidden sm:block border-white border-[1px] py-3 w-40 rounded-full font-Roboto sm:text-[18px]"
                >
                  Sign in
                </button>
              )}
              <img
                alt="profile img"
                src={Avatar}
                className="h-12 w-12 rounded-full ml-6"
              />
            </div>
          </div>
        </>
      )}
      {location.pathname === "/SavedArticles" && (
        <>
          <div className="flex justify-between p-4 border-b-[1px] border-black text-black font-RobotoSlab sm:px-[104px] sm:items-center sm:border-opacity-50">
            <p className="text-black font-RobotoSlab sm:text-[20px]">
              AviNews Explorer
            </p>
            <button
              onClick={props.handleNavMenu}
              className="bg-menuBlack border-none h-6 w-6 sm:hidden"
            ></button>
            {/* These buttons only appear on small screens or larger */}
            <div className="hidden items-center sm:flex font-Roboto sm:text-[18px]">
              <button
                onClick={props.handleContactModal}
                className="hidden sm:block mr-[42px]"
              >
                Contact
              </button>
              <button
                onClick={props.handleProfileModal}
                className="hidden sm:block mr-[42px]"
              >
                Profile
              </button>
              {props.isLoggedIn ? (
                <Link
                  to="/SavedArticles"
                  className="text-center hidden sm:block mr-[42px]"
                >
                  Saved Articles
                </Link>
              ) : (
                ""
              )}
              <Link to="/" className="hidden sm:block mr-[42px] ">
                Home
              </Link>
              <button className="hidden sm:block border-black border-[1px] py-3 w-40 rounded-full font-Roboto sm:text-[18px]">
                Logout
              </button>
              <img
                alt="profile img"
                src={Avatar}
                className="h-12 w-12 rounded-full ml-6"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
