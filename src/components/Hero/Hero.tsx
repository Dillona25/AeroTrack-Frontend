import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";
import "../../vendor/fonts.css";

type Props = {
  handleSearch?: () => void;
};

export const Hero = (props: Props) => {
  return (
    <div className="mt-7 px-4 py-[32px] sm:py-[80px] flex flex-col gap-[122px] sm:max-w-[650px] sm:m-auto">
      <div className="gap-4 flex flex-col sm:gap-8">
        <h1 className="text-white text-[36px] font-normal leading-[44px] w-[288px] sm:w-full sm:text-[60px] sm:mt-[80px] sm:leading-[64px]">
          Whats going on in aviation?
        </h1>
        <p className="text-white font-normal w-[288px] sm:w-full sm:text-[18px]">
          We are your source for the most recent aviation news. Find articles
          and save them for later.
        </p>
      </div>
      {/* This div only appears on desktop */}
      <div className="flex flex-col sm:relative">
        <SearchBar
          placeholder="Search Articles"
          className="sm:py-5 sm:rounded-full mb-2"
        />
        <Button
          text="Search"
          onClick={props.handleSearch}
          className="sm:absolute sm:py-5 sm:rounded-full sm:w-[150px] sm:right-0 mt-4 sm:mt-0"
        />
      </div>
    </div>
  );
};
