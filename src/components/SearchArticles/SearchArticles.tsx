import "../../vendor/fonts.css";
import Card1 from "../../images/card1.avif";
import Card2 from "../../images/card2.avif";
import Card3 from "../../images/card3.avif";

import { Button } from "../Button/Button";
import { NewsCard } from "../NewsCard/NewsCard";

type Props = {
  isLoggedIn?: boolean;
  showMore?: boolean;
  setShowMore?: Boolean;
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
          <NewsCard
            title="Everyone Needs a Special 'Sit Spot' in Nature"
            description=" Ever since I read Richard Louv's influential book, Last Child in the
            Woods, the idea of having a special sit spot has stuck with me.
            This advice, which Louv attributes to nature educator Jon Young, is
            for both adults and children to find..."
            keyword="Treehugger"
            date="November 4, 2020"
            isLoggedIn={props.isLoggedIn}
            src={Card1}
          />
          <NewsCard
            title="Nature makes you better"
            description="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves."
            keyword="National Geographic"
            date="September 27, 2024"
            isLoggedIn={props.isLoggedIn}
            src={Card2}
          />
          <NewsCard
            title="Grand Teton Renews Historic Crest Trail"
            description="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be..."
            keyword="Nation Parks Traveler"
            date="November 4, 2020"
            isLoggedIn={props.isLoggedIn}
            src={Card3}
          />
          {/* Cards only show if the user selects "show more" */}
          {props.showMore ? (
            <>
              <NewsCard
                title="Everyone Needs a Special 'Sit Spot' in Nature"
                description=" Ever since I read Richard Louv's influential book, Last Child in the
                Woods, the idea of having a special sit spot has stuck with me.
                This advice, which Louv attributes to nature educator Jon Young, is
                for both adults and children to find..."
                keyword="Treehugger"
                date="November 4, 2020"
                isLoggedIn={props.isLoggedIn}
                src={Card1}
              />
              <NewsCard
                title="Nature makes you better"
                description="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves."
                keyword="National Geographic"
                date="September 27, 2024"
                isLoggedIn={props.isLoggedIn}
                src={Card2}
              />
              <NewsCard
                title="Grand Teton Renews Historic Crest Trail"
                description="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be..."
                keyword="Nation Parks Traveler"
                date="November 4, 2020"
                isLoggedIn={props.isLoggedIn}
                src={Card3}
              />{" "}
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
