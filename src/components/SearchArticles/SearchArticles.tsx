import "../../vendor/fonts.css";
import { useState } from "react";
import { Button } from "../Button/Button";
import { NewsCardList } from "../NewsCardList/NewsCardList";
import { Article, SaveArticlesProps } from "../App";

type Props = {
  cardsData: Article[];
  isLoggedIn?: boolean;
  handleSaveArticle?: (card: Article) => void;
};

export const SearchArticles = (props: Props) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const handleShowMore = () => {
    setVisibleCards((seeVisibleCards) => seeVisibleCards + 3);
  };

  return (
    <section className="bg-[#f5f6f7] w-full">
      <div className="flex flex-col m-auto pb-6 pt-[32px] max-w-[1440px] sm:py-[80px]">
        <h1 className="font-normal pb-[15px] text-center sm:text-[40px]">
          Search Results
        </h1>
        <NewsCardList
          isLoggedIn={props.isLoggedIn}
          cardsData={props.cardsData}
          visibleCards={visibleCards}
          handleSaveArticle={props.handleSaveArticle}
        />
        <Button
          onClick={handleShowMore}
          text="Show more"
          className="bg-black max-w-[288px] hover:bg-opacity-50 sm:rounded-full"
        />
      </div>
    </section>
  );
};
