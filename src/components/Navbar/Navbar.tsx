import "../../vendor/fonts.css";
import { useLocation } from "react-router-dom";

type Props = {
  handleNavMenu?: () => void;
  handleContactModal?: () => void;
};

export const Navbar = (props: Props) => {
  let location = useLocation();

  return (
    <div>
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
            <div className="hidden sm:flex font-Roboto sm:text-[18px]">
              <button className="hidden sm:block mr-[42px] ">Home</button>
              <button className="hidden sm:block mr-[42px]">About</button>
              <button className="hidden sm:block mr-[42px]">Contact</button>
              <button
                onClick={props.handleContactModal}
                className="hidden sm:block border-white border-[1px] py-3 w-40 rounded-full font-Roboto sm:text-[18px]"
              >
                Sign in
              </button>
            </div>
          </div>
        </>
      )}
      {location.pathname === "/SavedArticles" && (
        <>
          <div className="flex justify-between p-4 border-b-[1px] border-black text-black font-RobotoSlab">
            <p className="text-black font-RobotoSlab">AviNews Explorer</p>
            <button
              onClick={props.handleNavMenu}
              className="bg-menuBlack after:border-none h-6 w-6"
            ></button>
          </div>
        </>
      )}
    </div>
  );
};
