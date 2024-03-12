import { Article } from "../../components/App";
import { NewsCardList } from "../../components/NewsCardList/NewsCardList";

type Props = {
  cardsData: Article[];
};

export const SavedArticles = (props: Props) => {
  return (
    <div className="bg-[#f5f6f7] flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {/* // Card compoennts will go here */}
      <NewsCardList cardsData={props.cardsData} />
    </div>
  );
};
