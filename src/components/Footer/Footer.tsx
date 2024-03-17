import "../../vendor/fonts.css";
import { useLocation } from "react-router-dom";

type Props = {
  handleContactModal?: () => void;
};

export const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer
      // Added logic here for path class due to the user not having saved articles we want to keep that footer at the bottom
      className={
        location.pathname === "/SavedArticles"
          ? // if we do not have saved articles this needs to be position absolute
            `${`bg-[#f5f6f7] p-5 flex justify-between relative bottom-0 w-full items-center`}`
          : `${`bg-[#f5f6f7] p-5 flex justify-between items-center`}`
      }
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
        <p className="text-[14px] text-black font-Roboto font-normal items-center">
          &copy; {currentYear} Dillon Arnold
        </p>
        <button
          onClick={props.handleContactModal}
          className="text-start text-[14px] text-black underline font-Roboto font-normal"
        >
          Contact
        </button>
      </div>
      <a
        href="https://www.linkedin.com/in/dillonarnold/"
        target="_blank"
        className="h-12 w-12 bg-LinkedInIcon"
      ></a>
    </footer>
  );
};
