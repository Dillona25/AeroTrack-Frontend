import portrait from "../../Images/Portrait.png";

export const About = () => {
  return (
    <div className="flex flex-col m-auto mb-[125px] max-w-[288px] mt-8">
      <img
        src={portrait}
        alt="portrait of self"
        className="h-fit w-[225px] m-auto rounded-[50px] bg-[#f5f6f7] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      />
      <h1 className="font-normal mt-6 mb-4">About the Author</h1>
      <p className="font-normal">
        Hello 👋 Im Dillon, a full-stack engineer proficient in
        JavaScript/TypeScript, React, Node, and Express.
        <br />
        <br />
        In March of 2024 I graduated TripleTens Software engineering bootcamp.
        Im passionate about problem solving through code and a relentless
        pursuit of non-stop learning. I have work history that brings a wealth
        of experience in leadership, project management and collaboration with a
        proven track record of delivering efficient, and impactful solutions.
      </p>
    </div>
  );
};
