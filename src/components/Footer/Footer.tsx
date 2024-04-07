import "../../vendor/fonts.css";
import { useLocation } from "react-router-dom";

export const Footer = () => {
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
      </div>
      <a
        href="https://www.linkedin.com/in/dillonarnold/"
        target="_blank"
        className="h-12 w-12 bg-LinkedInIcon"
      ></a>
    </footer>
  );
};
