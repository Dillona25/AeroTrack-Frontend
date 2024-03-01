import "../../Vendor/Fonts.css";
import { useState } from "react";
import { NavDropDown } from "../NavbarDropDown/NavbarDropDown";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState("");

  const openDrownDown = () => {
    setDropDown("openDropDown");
  };

  // Set type to void to component prop gets passed to
  const closeDropDown = () => {
    setDropDown("");
  };

  return (
    <>
      <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab">
        <p className="text-white font-RobotoSlab">AviNews Explorer</p>
        <button
          onClick={openDrownDown}
          className="bg-menu border-none h-6 w-6"
        ></button>
      </div>
      {dropDown && <NavDropDown closeDropDown={closeDropDown} />}
    </>
  );
};
