import "../../vendor/fonts.css";

type Props = {
  handleContactModal?: () => void;
};

export const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#3a3a3a] p-5 flex justify-between items-center">
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
        <p className="text-[14px] text-white font-Roboto font-normal items-center">
          &copy; {currentYear} Dillon Arnold
        </p>
        <button
          onClick={props.handleContactModal}
          className="text-start text-[14px] text-white underline font-Roboto font-normal"
        >
          Contact
        </button>
      </div>
      <a
        href="https://www.linkedin.com/in/dillonarnold/"
        className="h-12 w-12 bg-LinkedInIcon"
      ></a>
    </div>
  );
};
