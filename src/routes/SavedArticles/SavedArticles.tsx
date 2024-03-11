import { NewsCard } from "../../components/NewsCard/NewsCard";

export const SavedArticles = () => {
  return (
    <div className="bg-[#f5f6f7] flex flex-col gap-3 py-[32px] items-center justify-center sm:flex-row sm:flex-wrap">
      {/* // Card compoennts will go here */}
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};
