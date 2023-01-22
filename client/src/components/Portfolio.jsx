import {
  prepUrself,
  weather,
  employeeTracker,
  wishlist,
  quiz,
  teamProfile,
} from "../assets";

const Portfolio = () => {
  return (
    <div className=" ">
      <div className="mb-[50px] flex p-1 justify-around items-center flex-wrap mt-[150px] ">
        <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
          <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold  ">Weather Dashboard</h1>
          <img
            src={weather}
            alt="meal planner"
            className="w-[400px] h-[175px] border-4 border-white mb-6"
          />
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

        <div className=" text-center m-10 z-[5] bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2">
          <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">
            Meal Planner/Recipe App
          </h1>
          <img
            src={prepUrself}
            alt="meal planner"
            className="w-[400px] h-[175px] border-4 border-white mb-6"
          />
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
          <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">Employee Tracker</h1>
          <img
            src={employeeTracker}
            alt="meal planner"
            className="w-[400px] h-[175px] border-4 border-white mb-6"
          />
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
          <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold ">Holiday Wishlist</h1>
          <img
            src={wishlist}
            alt="meal planner"
            className="w-[400px] h-[175px] border-4 border-white mb-6 "
          />
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
          <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold  ">JavaScript Quiz</h1>
          <img
            src={quiz}
            alt="meal planner"
            className="w-[400px] h-[175px] border-4 border-white mb-6"
          />
          <a
            href="https://eebbinghaus.github.io/javaScript-quiz/"
            target="_blank"
            className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
          >
            Link to Deployed Application
          </a>
          <br />
          <a
            href="https://github.com/eebbinghaus/javaScript-quiz"
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
  );
};

export default Portfolio;
