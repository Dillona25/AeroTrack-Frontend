import Avatar from "../../images/Hiker.avif";

export const About = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-14 m-auto w-[288px] sm:w-full my-8 sm:my-[80px]">
      <img
        alt="Photo of author"
        src={Avatar}
        className="bg-black h-[300px] w-[300px] sm:h-[464px] sm:w-[464px] rounded-full m-auto sm:m-0 mb-4"
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-normal sm:text-[40px] sm:mt-8">About the Author</h1>
        <p className="font-normal text-[16px] sm:text-[18px] sm:max-w-[600px]">
          Hello 👋 Im Dillon, a full-stack engineer proficient in
          JavaScript/TypeScript, React, Node, and Express.
          <br />
          <br />
          In March of 2024 I graduated TripleTens Software engineering bootcamp.
          Im passionate about problem solving through code and a relentless
          pursuit of non-stop learning. I have work history that brings a wealth
          of experience in leadership, project management and collaboration with
          a proven track record of delivering efficient, and impactful
          solutions.
        </p>
      </div>
    </div>
  );
};
