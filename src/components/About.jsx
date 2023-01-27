import { famPic } from "../assets";
import AnimatedPage from "./AnimatedPage";

const About = () => {
    return (
        <AnimatedPage>
            <section>
                <div className="">
                    <div className="flex flex-row justify-center flex-wrap my-[150px]">
                        <img
                            src={famPic}
                            alt="family"
                            className=" mt-[40px] ml-10 scale-150 relative z-[5] "
                        />

                        {/* <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[30%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[30%] h-[50%] left-20  blue__gradient" /> */}

                        <p className=" text-[20px] text-[#d8dfee] font-skranji sm:max-w-[700px] sm:max-h-[300px] mt-[250px] z-[4] rounded-xl shadow-[0_20px_80px_20px_rgba(0,0,0)] bg-[#42666E] text-center p-4 border-[#cbf83e] border-solid border-2 m-8">
                            Aspiring Junior Developer by day, and avid video
                            game junkie by night! Loving husband and dad of
                            three awesome kiddos 24/7! Feeling a little stuck in
                            my day to day job I decided it was time to
                            transition into an engaging career working on things
                            that I'm passionate about. I started by teaching
                            myself some coding basics and then signed up for a
                            bootcamp through the University of Denver. With a
                            background in leadership as well as customer service
                            I'm excited to add these newly aquired skills to my
                            resume, and find a new team to call home. Please
                            take a look at a few of my favorite projects in my
                            portfolio section!
                        </p>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default About;
