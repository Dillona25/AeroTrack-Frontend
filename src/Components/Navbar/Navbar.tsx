import "../../vendor/fonts.css";
import { NavDropDown } from "../NavbarDropDown/NavbarDropDown";
import { useModal } from "../../hooks/useModal";

export const Navbar = () => {
  const { toggle, closeModal, isOpen } = useModal();

  return (
    <>
      <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab">
        <p className="text-white font-RobotoSlab">AviNews Explorer</p>
        <button
          onClick={toggle}
          className="bg-menu border-none h-6 w-6"
        ></button>
      </div>
      {isOpen && <NavDropDown closeModal={closeModal} />}
    </>
  );
};
