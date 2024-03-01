import "../../Vendor/Fonts.css";
import { Button } from "../Button/Button";
import { NewsCard } from "../NewsCard/NewsCard";

export const SugesstedArticles = () => {
  return (
    <div className="bg-[#f5f6f7] w-full">
      <div className="max-w-[288px] m-auto">
        <h1 className="font-normal pt-[30px] pb-[15px] text-left">
          Suggested Articles
        </h1>
        <div className="flex flex-col gap-3 py-[32px] items-center">
          {/* // Card compoennts will go here */}
          <NewsCard />
          <NewsCard />
          <NewsCard />
          {/* When clicked, this button should show 3 more articles */}
          <Button text="Show more" className="bg-black max-w-[288px]" />
        </div>
      </div>
    </div>
  );
};
