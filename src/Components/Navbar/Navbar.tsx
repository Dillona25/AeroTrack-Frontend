import "../../vendor/fonts.css";

type Props = {
  handleNavMenu?: () => void;
};

export const Navbar = (props: Props) => {
  return (
    <>
      <div className="flex justify-between p-4 border-b-[1px] border-white text-white font-RobotoSlab">
        <p className="text-white font-RobotoSlab">AviNews Explorer</p>
        <button
          onClick={props.handleNavMenu}
          className="bg-menu border-none h-6 w-6"
        ></button>
      </div>
    </>
  );
};
