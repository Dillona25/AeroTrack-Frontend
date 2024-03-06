import hiker from "../../images/Hiker.avif";

export const About = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-14 m-auto w-[288px] sm:w-full my-8 sm:my-[80px]">
      <img
        src={hiker}
        alt="portrait of self"
        className=" w-[350px] sm:h-[300px] rounded-[20px] sm:w-fit m-auto sm:m-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      />
      <div className="flex flex-col gap-4">
        <h1 className="font-normal sm:text-[40px]">About the Author</h1>
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
