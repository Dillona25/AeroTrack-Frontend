import "../../vendor/fonts.css";
import { Button } from "../Button/Button";
import { NewsCard } from "../NewsCard/NewsCard";

type Props = {
  isLoggedIn?: boolean;
};

export const SugesstedArticles = (props: Props) => {
  return (
    <div className="bg-[#f5f6f7] w-full">
      <div className="flex flex-col items-center pb-6 pt-[32px]">
        <h1 className="font-normal pb-[15px] self-start">Suggested Articles</h1>
        <div className="flex flex-col gap-3 py-[32px] items-center sm:flex-row">
          {/* // Card compoennts will go here */}
          <NewsCard isLoggedIn={props.isLoggedIn} />
          <NewsCard isLoggedIn={props.isLoggedIn} />
          <NewsCard isLoggedIn={props.isLoggedIn} />
          {/* When clicked, this button should show 3 more articles */}
        </div>
        <Button
          text="Show more"
          className="bg-black max-w-[288px] sm:rounded-full"
        />
      </div>
    </div>
  );
};
