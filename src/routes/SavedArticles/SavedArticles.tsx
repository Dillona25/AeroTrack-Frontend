import { Article } from "../../components/App";
import { NewsCardList } from "../../components/NewsCardList/NewsCardList";

type Props = {
  savedNewsArticles: Article[];
  handleDeleteArticle?: (articleId: Article) => void;
};

export const SavedArticles = (props: Props) => {
  return (
    <ul className="bg-white max-w-[1440px] m-auto flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {/* // Card compoennts will go here */}
      <NewsCardList
        handleDeleteArticle={props.handleDeleteArticle}
        cardsData={props.savedNewsArticles}
      />
    </ul>
  );
};
