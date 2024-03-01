import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";
import "../../Vendor/Fonts.css";

export const Hero = () => {
  return (
    <div className="mt-7 px-4 py-[32px] flex flex-col gap-[122px]">
      <div className="gap-4 flex flex-col">
        <h1 className="text-white text-[36px] font-normal leading-[44px] max-w-[288px]">
          Whats going on in aviation?
        </h1>
        <p className="text-white font-normal max-w-[288px]">
          We are your source for the most recent aviation news. Find articles
          and save them for later.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SearchBar placeholder="Search Articles" />
        <Button text="Search" />
      </div>
    </div>
  );
};
