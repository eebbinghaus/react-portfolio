import { meLogo } from "../assets";
import AnimatedPage from "./AnimatedPage";

const Home = () => {
    return (
        <AnimatedPage>
            <div className="flex justify-center">
                <div className="flex justify-center sm:w-3/4 rounded-xl shadow-[0_20px_80px_20px_black] flex-wrap mt-[70px] xs:mx-10 xs:mb-4">
                    <div className=" p-10 lg:pl-[120px] ">
                        <h1 className="text-[#cbf83e]  text-[60px] lg:text-[120px] font-racing font-bold  pt-10 ">
                            Erich
                        </h1>
                        <h1 className="text-[#cbf83e] text-[60px] lg:text-[120px] font-racing font-bold  ">
                            Ebbinghaus
                        </h1>
                        <p className=" text-cyan-300 lg:text-[#d8dfee] text-[30px] lg:text-[60px]  font-racing lg:ml-[100px]">
                            Full Stack Developer
                        </p>
                        <p className="lg:text-[#d8dfee] text-[16px] lg:text-[24px] font-poppins lg:ml-[150px]">
                            "Chasing the things that I'm passionate about!"
                        </p>
                    </div>
                    <div className="z-[5] lg:max-w-[35%] mt-[10x]">
                        <img src={meLogo} className="" />
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Home;
