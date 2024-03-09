import { MouseEventHandler } from "react";
import "../../vendor/fonts.css";

import { Button } from "../Button/Button";
import { NewsCard } from "../NewsCard/NewsCard";

type Props = {
  isLoggedIn?: boolean;
  showMore?: boolean;
  setShowMore?: MouseEventHandler;
};

export const SearchArticles = (props: Props) => {
  return (
    <div className="bg-[#f5f6f7] w-full">
      <div className="flex flex-col m-auto pb-6 pt-[32px] max-w-[1440px] sm:py-[80px]">
        <h1 className="font-normal pb-[15px] text-center sm:text-[40px]">
          Search Results
        </h1>
        <div className="flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
          {/* // Card compoennts will go here */}
          <NewsCard />
          <NewsCard />
          <NewsCard />
          {/* Cards only show if the user selects "show more" */}
          {props.showMore ? (
            <>
              <NewsCard />
              <NewsCard />
              <NewsCard />{" "}
            </>
          ) : (
            ""
          )}
          {/* When clicked, this button should show 3 more articles */}
        </div>
        <Button
          onClick={props.setShowMore}
          text="Show more"
          className="bg-black max-w-[288px] hover:bg-opacity-50 sm:rounded-full"
        />
      </div>
    </div>
  );
};
