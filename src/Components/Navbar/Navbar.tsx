import "../../vendor/fonts.css";
import { useLocation } from "react-router-dom";

type Props = {
  handleNavMenu?: () => void;
};

export const Navbar = (props: Props) => {
  let location = useLocation();

  return (
    <div>
      {location.pathname === "/" && (
        <>
          <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab">
            <p className="text-white font-RobotoSlab">AviNews Explorer</p>
            <button
              onClick={props.handleNavMenu}
              className="bg-menu border-none h-6 w-6"
            ></button>
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
