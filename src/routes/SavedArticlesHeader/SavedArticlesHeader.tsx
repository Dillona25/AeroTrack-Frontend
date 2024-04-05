import { Article, currentUser } from "../../components/App";

type Props = {
  savedNewsArticles?: Article[];
  currentUser?: currentUser;
};

export const SavedArticlesHeader = (props: Props) => {
  return (
    <header className="bg-[#f5f6f7] flex flex-col px-4 lg:px-[104px]">
      <p className="mt-4 font-Roboto text-black opacity-50">Saved articles</p>
      {/* Logic here will need to change when the saved cards is working, for now this makes this number not static */}
      <h1 className="mt-4 mb-8 font-RobotoSlab font-normal text-[30px] lg:text-[40px] lg:w-[530px]">
        {props.currentUser?.name}, you have {props.savedNewsArticles?.length}{" "}
        saved articles
      </h1>
    </header>
  );
};
