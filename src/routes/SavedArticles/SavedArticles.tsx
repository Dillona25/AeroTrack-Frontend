import { NewsCard } from "../../components/NewsCard/NewsCard";

type Props = {
  isLoggedIn?: Boolean;
};

export const SavedArticles = (props: Props) => {
  return (
    <div className="bg-[#f5f6f7] w-full">
      {" "}
      <div className="max-w-[288px] m-auto">
        <div className="flex flex-col gap-3 py-[32px] items-center">
          {/* // Card compoennts will go here */}
          <NewsCard isLoggedIn={props.isLoggedIn} />
          <NewsCard isLoggedIn={props.isLoggedIn} />
          <NewsCard isLoggedIn={props.isLoggedIn} />
        </div>
      </div>
    </div>
  );
};
