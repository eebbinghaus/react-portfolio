import {
    prepUrself,
    weather,
    employeeTracker,
    wishlist,
    quiz,
    teamProfile,
    malie,
} from "../assets";
import AnimatedPage from "./AnimatedPage";

const Portfolio = () => {
    return (
        <AnimatedPage>
            <div className=" ">
                <div className="mb-[50px] flex p-1 justify-around items-center flex-wrap mt-[70px] ">
                    <div className=" text-center m-10  bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold  ">
                            The Malie Hotel
                        </h1>
                        <img
                            src={malie}
                            alt="hotel rooms"
                            className="w-[400px] h-[175px] border-4 border-white mb-6"
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">A modern looking website for booking a room at The Malie Hotel using MERN, Stripe, and JWT authentication.</p>
                        <a
                            href="https://the-malie.herokuapp.com/"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Deployed Application
                        </a>
                        <br />
                        <a
                            href="https://github.com/BluSkreen/malie-hotel"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">
                            Meal Planner/Recipe App
                        </h1>
                        <img
                            src={prepUrself}
                            alt="meal planner"
                            className="w-[400px] h-[175px] border-4 border-white mb-6"
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">prepUrself is a meal planning application that allows users to search recipes, and assign them to days of the week for an easy way to meal prep!</p>
                        <a
                            href="https://bencha27.github.io/prepUrself/"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Deployed Application
                        </a>
                        <br />
                        <a
                            href="https://github.com/bencha27/prepUrself"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">
                            Employee Tracker
                        </h1>
                        <img
                            src={employeeTracker}
                            alt="meal planner"
                            className="w-[400px] h-[175px] border-4 border-white mb-6"
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">This command-line application will allow you to view departments, roles and employees in a formatted table.</p>
                        <a
                            href="https://drive.google.com/file/d/1WCBJHjrinwSsWccUmaNCT0SRhjCIvG-v/view"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Video Demonstration
                        </a>
                        <br />
                        <a
                            href="https://github.com/eebbinghaus/employee-tracker"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">
                            Holiday Wishlist
                        </h1>
                        <img
                            src={wishlist}
                            alt="meal planner"
                            className="w-[400px] h-[175px] border-4 border-white mb-6 "
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">A fun App that allows you to save all of the things that you want for the Holidays as well as view your friends and family lists all in one place.  </p>
                        <a
                            href="https://mighty-escarpment-72007.herokuapp.com/"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Deployed Application
                        </a>
                        <br />
                        <a
                            href="https://github.com/Darin1027/Holiday-Wishlist-App"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold  ">
                            JavaScript Quiz
                        </h1>
                        <img
                            src={weather}
                            alt="meal planner"
                            className="w-[400px] h-[175px] border-4 border-white mb-6"
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">This app was created using JavaScript and utilizes the Open Weather API to provide real time weather info for any city in the world!</p>
                        <a
                            href="https://eebbinghaus.github.io/weather-dashboard/"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Deployed Application
                        </a>
                        <br />
                        <a
                            href="https://github.com/eebbinghaus/weather-dashboard"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2 ">
                        <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">
                            Team Profile Generator
                        </h1>
                        <img
                            src={teamProfile}
                            alt="meal planner"
                            className="w-[400px] h-[175px] border-4 border-white mb-6"
                        />
                        <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">Use this Team Profile Generator to quickly generate a webpage that will display your team's basic information. </p>
                        <a
                            href="https://drive.google.com/file/d/1hkZUB1H2bZcbjzyiJH7jd5YFykh6uPih/view"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to Video Demonstration
                        </a>
                        <br />
                        <a
                            href="https://github.com/eebbinghaus/team-profile-generator"
                            target="_blank"
                            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                        >
                            Link to GitHub Repository
                        </a>
                    </div>

                    {/* <div className="absolute z-[0] w-[10%] h-[35%] top-0 pink__gradient" /> 
        <div className="absolute z-[1] w-[30%] h-[10%] rounded-full bottom-40 white__gradient" />
         <div className="absolute z-[0] w-[50%] h-[50%] left-20  blue__gradient" /> */}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Portfolio;