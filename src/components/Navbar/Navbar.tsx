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
          <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab lg:px-[104px] lg:items-center lg:border-opacity-50">
            <p className="text-white font-RobotoSlab lg:text-[20px]">
              AviNews Explorer
            </p>
            <button
              onClick={props.handleNavMenu}
              className="bg-menu border-none h-6 w-6 lg:hidden"
            ></button>
            {/* These buttons only appear on lgall screens or larger */}
            <div className="hidden items-center lg:flex font-Roboto lg:text-[18px]">
              {props.isLoggedIn ? (
                <button
                  onClick={props.handleProfileModal}
                  className="hidden lg:block mr-[42px]"
                >
                  Profile
                </button>
              ) : (
                ""
              )}
              {/* if the user is logged in we show saved articles, otherwise we show nothing */}
              {props.isLoggedIn ? (
                <Link
                  to="/SavedArticles"
                  className="text-center hidden lg:block mr-[42px]"
                >
                  Saved Articles
                </Link>
              ) : (
                ""
              )}
              {/* If the user is logged in, we display a button to logout, otherwise we display a sign in button */}
              {props.isLoggedIn ? (
                <button className="hidden lg:block border-white border-[1px] py-3 w-40 rounded-full font-Roboto lg:text-[18px]">
                  Logout
                </button>
              ) : (
                <button
                  onClick={props.handleSignInModal}
                  className="hidden lg:block border-white border-[1px] py-3 w-40 rounded-full font-Roboto lg:text-[18px]"
                >
                  Sign in
                </button>
              )}
              {props.isLoggedIn ? (
                <img
                  alt="profile img"
                  src={Avatar}
                  className="h-12 w-12 rounded-full ml-6"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
      {location.pathname === "/SavedArticles" && (
        <>
          <div className="bg-white flex justify-between p-4 border-b-[1px] border-black text-black font-RobotoSlab lg:px-[104px] lg:items-center lg:border-opacity-50">
            <Link to="/" className="text-black font-RobotoSlab lg:text-[20px]">
              AviNews Explorer
            </Link>
            <button
              onClick={props.handleNavMenu}
              className="bg-menuBlack border-none h-6 w-6 lg:hidden"
            ></button>
            {/* These buttons only appear on lgall screens or larger */}
            <div className="hidden items-center lg:flex font-Roboto lg:text-[18px]">
              <button
                onClick={props.handleProfileModal}
                className="hidden lg:block mr-[42px]"
              >
                Profile
              </button>
              {props.isLoggedIn ? (
                <Link
                  to="/SavedArticles"
                  className="text-center hidden lg:block mr-[42px]"
                >
                  Saved Articles
                </Link>
              ) : (
                ""
              )}
              <Link to="/" className="hidden lg:block mr-[42px] ">
                Home
              </Link>
              <button className="hidden lg:block border-black border-[1px] py-3 w-40 rounded-full font-Roboto lg:text-[18px]">
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
