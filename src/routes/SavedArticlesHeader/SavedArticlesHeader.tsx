export const SavedArticlesHeader = () => {
  return (
    <div className="bg-white flex flex-col px-4 lg:px-[104px]">
      <p className="mt-4 font-Roboto text-black opacity-50">Saved articles</p>
      <h1 className="mt-4 font-RobotoSlab font-normal text-[30px] lg:text-[40px] lg:w-[530px]">
        Dillon, you have 3 saved articles
      </h1>
      <h1 className="font-Roboto mt-12 mb-8 text-[18px]">
        By Keywords:
        <span className="font-RobotoSlab">
          {" "}
          Nature, Yellowstone, and 2 others
        </span>
      </h1>
    </div>
  );
};
