import { family } from "../assets";

const About = () => {
  return (
    <section>
      <div>
        <div className="flex flex-row justify-between flex-wrap">
          <img
            src={family}
            alt="family"
            className=" ml-7 scale-125 relative z-[5] "
          />

          {/* <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" /> */}
          <div className="absolute z-[1] w-[80%] h-[30%] rounded-full bottom-40 white__gradient" />
          {/* <div className="absolute z-[0] w-[50%] h-[50%] left-20  blue__gradient" /> */}

          <p className="text-white  font-poppins max-w-[700px] max-h-[300px] mt-7 z-[4]">
            Aspiring Junior Developer by day, and avid video game junkie by
            night! Loving husband and dad of three awesome kiddos 24/7! Feeling
            a little stuck in my day to day job I decided it was time to
            transition into an engaging career working on things that I'm
            passionate about. I started by teaching myself some coding basics
            and then signed up for a bootcamp through the University of Denver.
            With a background in leadership as well as customer service I'm
            excited to add these newly aquired skills to my resume, and find a
            new team to call home. Please take a look at a few of my favorite
            projects in my portfolio section!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
