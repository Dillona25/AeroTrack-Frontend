import { Article } from "../../components/App";
import { NewsCardList } from "../../components/NewsCardList/NewsCardList";

type Props = {
  cardsData: Article[];
  handleSaveArticle?: () => void;
};

export const SavedArticles = (props: Props) => {
  return (
    <ul className="bg-white max-w-[1440px] m-auto flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {/* // Card compoennts will go here */}
      <NewsCardList cardsData={props.cardsData} />
    </ul>
  );
};
