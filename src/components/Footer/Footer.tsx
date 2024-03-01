import "../../Vendor/Fonts.css";
import linkedIn from "../../Assets/linkedIn.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#f5f6f7] p-5 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <p className="text-[14px] text-[#84898b] font-Roboto font-normal items-center">
          &copy; {currentYear} Dillon Arnold
        </p>
        <p className="text-[14px] text-[#84898b] font-Roboto font-normal">
          Contact
        </p>
      </div>
      <img src={linkedIn} alt="linkedIn logo" className="h-12 w-12" />
    </div>
  );
};
