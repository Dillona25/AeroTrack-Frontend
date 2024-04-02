import { SaveArticlesProps, type Article } from "../App";
import { NewsCard } from "../NewsCard/NewsCard";

type Props = {
  visibleCards?: number;
  cardsData: Article[];
  isLoggedIn?: boolean;
  handleSaveArticle?: (card: SaveArticlesProps) => void;
  saveCard: SaveArticlesProps;
};

export const NewsCardList = (props: Props) => {
  // Generate an array of length 'visibleCards' to render the correct number of cards
  const cards = props.cardsData
    .slice(0, props.visibleCards)
    .map((cardObj: Article, index) => (
      <NewsCard
        isLoggedIn={props.isLoggedIn}
        cardObj={cardObj}
        key={index}
        handleSaveArticle={props.handleSaveArticle}
        saveCard={props.saveCard}
      />
    ));

  return (
    <ul className="flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {cards}
    </ul>
  );
};
