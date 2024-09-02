import { IoMdTrendingUp } from "react-icons/io";

export const RecommendedNews = () => {
  return (
    <section className="bg-[#f5f6f7] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-4 mb-8">
          <div className="relative">
            <button className="p-3 bg-black text-white rounded-[20px] shadow-md">
              Alaska Airlines
            </button>
            <IoMdTrendingUp className="absolute top-[-10px] right-[-6px] text-green-500 text-3xl" />
          </div>
          <div className="relative">
            <button className="p-3 bg-black text-white rounded-[20px] shadow-md">
              Boeing
            </button>
            <IoMdTrendingUp className="absolute top-[-10px] right-[-6px] text-green-500 text-3xl" />
          </div>
          <div className="relative">
            <button className="p-3 bg-black text-white rounded-[20px] shadow-md">
              SpaceX
            </button>
          </div>
          <div className="relative">
            <button className="p-3 bg-black text-white rounded-[20px] shadow-md">
              American Airlines
            </button>
          </div>
          <div className="relative">
            <button className="p-3 bg-black text-white rounded-[20px] shadow-md">
              United Airlines
            </button>
            <IoMdTrendingUp className="absolute top-[-10px] right-[-6px] text-green-500 text-3xl" />
          </div>
        </div>

        <h1 className="text-center font-normal mb-8">Recommended Articles</h1>
      </div>
    </section>
  );
};
