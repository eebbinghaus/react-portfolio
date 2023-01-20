import { erich } from "../assets";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center  max-w-[1480px] rounded-xl shadow-[0_20px_80px_20px_black]   ">
        <div className="ml-[175px] z-[5] ">
          <h1 className="text-[#cbf83e] text-[120px] font-racing font-bold  pl-[90px] pt-[100px]">
            Erich 
          </h1>
          <h1 className="text-[#cbf83e] text-[120px] font-racing font-bold  pl-[100px] ">
             Ebbinghaus
          </h1>
          <p className="text-[#d8dfee] text-[50px] m-4 font-racing pl-[220px] ">
            Full Stack Developer
          </p>
          <p className="text-[#d8dfee] text-[24px] font-poppins pl-[170px]">"Chasing the things that I'm passionate about!"</p>
        </div>
        <div className="z-[5] mt-[100px] ">
          <img src={erich} className=''/>
        </div>
        {/* <div className="absolute z-[1] w-[80%] h-[30%] rounded-full bottom-40 white__gradient" /> 
         <div className="absolute z-[0] w-[10%] h-[10%] left-20  blue__gradient" />
        <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" /> */}
      </div>
    </div>
  );
};

export default Home;
