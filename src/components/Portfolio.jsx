import AnimatedPage from "./AnimatedPage";
import { projectInfo } from "./seeds";

const Portfolio = () => {
    return (
        <AnimatedPage>
            <div className=" ">
                <div className="mb-[50px] flex p-1 justify-around items-center flex-wrap mt-[70px] ">
                    {projectInfo.map((item, index) => (
                        <div
                            className=" text-center m-10  bg-[#42666E] p-4 shadow-[0_20px_80px_20px_rgba(0,0,0)] rounded-xl border-[#cbf83e] border-solid border-2"
                            key={index}
                        >
                            <h1 className="text-[#cbf83e] text-[24px] mb-3 font-racing font-bold  ">
                                {item.title}
                            </h1>
                            <img
                                src={`${item.image}`}
                                alt="hotel rooms"
                                className="w-[400px] h-[175px] border-4 border-white mb-6"
                            />
                            <p className="w-[380px] ml-2 text-[#cbf83e] font-skranji pb-4">
                                {item.description}
                            </p>
                            <a
                                href={`${item.linkToApp}`}
                                target="_blank"
                                className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                            >
                                Link to Deployed Application
                            </a>
                            <br />
                            <a
                                href={`${item.linkToGit}`}
                                target="_blank"
                                className="text-cyan-300 font-skranji hover:text-[#cbf83e]"
                            >
                                Link to GitHub Repository
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Portfolio;
