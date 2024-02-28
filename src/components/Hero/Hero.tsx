import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";
import "../../Vendor/Fonts.css";

export const Hero = () => {
  return (
    <div className="mt-7 px-4 py-[32px] flex flex-col gap-[122px]">
      <div className="gap-4 flex flex-col font-RobotoSlab font-medium text-white text-[36px]">
        <h1>Whats going on in aviation?</h1>
        <p className="text-[18px] font-Roboto">
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
