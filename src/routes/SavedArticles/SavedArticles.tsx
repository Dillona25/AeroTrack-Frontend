import { NewsCard } from "../../components/NewsCard/NewsCard";
import Card1 from "../../images/card1.avif";
import Card2 from "../../images/card2.avif";
import Card3 from "../../images/card3.avif";

export const SavedArticles = () => {
  return (
    <div className="bg-[#f5f6f7] w-full sm:py-[62px]">
      {" "}
      <div className="w-[288px] sm:w-[1440px] m-auto">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-3 py-[32px] items-center">
          {/* // Card compoennts will go here */}
          <NewsCard
            title="Everyone Needs a Special 'Sit Spot' in Nature"
            description=" Ever since I read Richard Louv's influential book, Last Child in the
            Woods, the idea of having a special sit spot has stuck with me.
            This advice, which Louv attributes to nature educator Jon Young, is
            for both adults and children to find..."
            keyword="Treehugger"
            date="November 4, 2020"
            src={Card1}
          />
          <NewsCard
            title="Nature makes you better"
            description="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves."
            keyword="National Geographic"
            date="September 27, 2024"
            src={Card2}
          />
          <NewsCard
            title="Grand Teton Renews Historic Crest Trail"
            description="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be..."
            keyword="Nation Parks Traveler"
            date="November 4, 2020"
            src={Card3}
          />
          <NewsCard
            title="Everyone Needs a Special 'Sit Spot' in Nature"
            description=" Ever since I read Richard Louv's influential book, Last Child in the
            Woods, the idea of having a special sit spot has stuck with me.
            This advice, which Louv attributes to nature educator Jon Young, is
            for both adults and children to find..."
            keyword="Treehugger"
            date="November 4, 2020"
            src={Card1}
          />
          <NewsCard
            title="Nature makes you better"
            description="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves."
            keyword="National Geographic"
            date="September 27, 2024"
            src={Card2}
          />
          <NewsCard
            title="Grand Teton Renews Historic Crest Trail"
            description="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be..."
            keyword="Nation Parks Traveler"
            date="November 4, 2020"
            src={Card3}
          />
        </div>
      </div>
    </div>
  );
};
