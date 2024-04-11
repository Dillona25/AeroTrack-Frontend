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
          JavaScript/TypeScript, React, Node, and Express.
          <br />
          Growing up I always had asiprations of becoming a pilot. In highschool
          I completed two years of ground school and passed my FAA learners
          permit exam needed to begin flying and getting my private pilots
          license. Unfortunately I was never able to pass the thrid class
          medical exam due to an extensive medical history. What I always knew
          in the back of my head was now a reality: I would never be able to
          become a pilot due to my medical history. Now in 2024 I am a full
          stack engineer coupling my two passions of aviation and software
          development.
        </p>
      </div>
    </section>
  );
};
