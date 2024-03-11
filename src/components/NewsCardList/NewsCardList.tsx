import { type Article } from "../App";
import { NewsCard } from "../NewsCard/NewsCard";

type Props = {
  visibleCards: number;
  cardsData: Article[];
};

export const NewsCardList = (props: Props) => {
  // Generate an array of length 'visibleCards' to render the correct number of cards
  const cards = props.cardsData
    .slice(0, props.visibleCards)
    .map((cardObj: Article, index) => (
      <NewsCard cardObj={cardObj} key={index} />
    ));

  return (
    <div className="flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {cards}
    </div>
  );
};
