import AnimatedPage from "./AnimatedPage";

const Resume = () => {
    return (
        <AnimatedPage>
            <div className="">
                <div className="flex justify-center my-[150px] text-center">
                    <section className="w-3/5 lg:flex justify-around bg-[#42666E] rounded-xl shadow-[0_20px_80px_20px_rgba(0,0,0)] border-[#cbf83e] border-solid border-2">
                        <div className="px-10">
                            <h1 className="text-[#cbf83e] text-[40px] font-racing pt-4">
                                Coding Skills
                            </h1>
                            <section className=" text-center bg-[#42666E] rounded-xl border-[#cbf83e] border-solid border-2 min-w-[245px] max-w-[700px] mt-1"></section>
                            <p className="underline text-[24px] font-racing text-cyan-300 pt-4">
                                Languages
                            </p>

                            <ul className="text-[#d8dfee] font-poppins">
                                <li>-JavaScript</li>
                                <li>-HTML</li>
                                <li>-CSS</li>
                            </ul>
                            <p className="underline text-[24px] font-racing text-cyan-300 pt-2">
                                Tools
                            </p>
                            <ul className="text-[#d8dfee] font-poppins">
                                <li>-React</li>
                                <li>-GraphQL</li>
                                <li>-MongoDB/Mongoose</li>
                                <li>-Nodejs</li>
                                <li>-Express</li>
                                <li>-SQL/mySQL</li>
                                <li>-Bootstrap</li>
                                <li>-Tailwind</li>
                            </ul>
                            <p className="underline text-[24px] font-racing text-cyan-300 pt-2">
                                Applications
                            </p>
                            <ul className="text-[#d8dfee]  font-poppins pb-4">
                                <li>-GitHub</li>
                                <li>-Heroku</li>
                                <li>-Apollo Sandbox</li>
                                <li>-Insomnia</li>
                                <li>-MySQL Workbench</li>
                                <li>-Mongo Compass</li>
                            </ul>
                        </div>
                        <div className="px-10">
                            <h1 className="text-[#cbf83e] text-[40px] font-racing text-center pt-4">
                                Certificates
                            </h1>
                            <section className=" text-center bg-[#42666E] min-w-[245px] rounded-xl border-[#cbf83e] border-solid border-2  mt-1"></section>
                            <h5 className="text-cyan-300 font-racing text-[24px] text-center pb-2 pt-6 font-bold ">
                                {" "}
                                Full Stack Web Development Certificate
                            </h5>
                            <p className="text-[#cbf83e] font-poppins font-bold text-center text-[19px] pb-2">
                                University of Denver
                            </p>
                            <p className="text-cyan-300 font-poppins text-center text-[19px]">
                                January 2023
                            </p>
                            <ul className="text-[#d8dfee] pt-4 font-poppins pb-4 text-start pl-2 ">
                                <li className="pb-3 text-[18px]">
                                    {" "}
                                    -Gained hands-on experience and technical
                                    understanding of the MERN stack.
                                </li>
                                <li className="pb-3 text-[18px]">
                                    -Worked in small groups to create three
                                    agile projects, using GitHub for version
                                    control and then deploying them with Heroku.
                                </li>
                                <li className="pb-2 text-[18px]">
                                    -Created 15 other small projects covering a
                                    number of different languages and libraries.
                                    Completing these projects helped to create a
                                    solid understanding of front-end design as
                                    well as back-end development.{" "}
                                </li>
                            </ul>
                            <div className="text-center pt-[20px]">
                                <a
                                    href="https://docs.google.com/document/d/1N4V997t2yPK4QcNwi9bHoJReBtG01JRreYa6yvv52Tw/edit?usp=sharing"
                                    target="_blank"
                                >
                                    <button
                                        className="shadow bg-[#cbf83e] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-[#42666E] font-bold py-2 px-4 rounded mb-10 font-racing"
                                        type="button"
                                    >
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Resume;
