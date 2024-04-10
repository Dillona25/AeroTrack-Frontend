import Avatar from "../../images/About.png";

export const About = () => {
  return (
    <section className="bg-white flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-14 m-auto lg:w-full py-8 lg:py-[80px]">
      <img
        alt="Photo of author"
        src={Avatar}
        className="bg-black h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full object-cover m-auto lg:m-0 mb-4"
      />
      <div className="flex flex-col w-[288px] lg:w-[600px] m-auto lg:m-0 gap-4">
        <h1 className="font-normal lg:text-[40px] lg:mt-8">About the Author</h1>
        <p className="font-normal text-[16px] lg:text-[18px]">
          Hello 👋 Im Dillon, a full-stack engineer proficient in
          JavaScript/TypeScript, React, Node, and Express. I should mention, I
          also love aviation!
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
    </section>
  );
};
