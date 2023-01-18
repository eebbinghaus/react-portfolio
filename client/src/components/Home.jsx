import { self } from "../assets";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex row justify-center max-w-[70%] rounded shadow-[0_20px_80px_20px_rgba(0,0,0)]   ">
        <div className="mt-7 z-[5]">
          <h1 className="text-cyan-300 text-[120px] font-skranji font-bold drop-shadow-[4px_4px_5px_rgba(0,0,0)] pl-[80px] pt-[100px]">
            Erich Ebbinghaus
          </h1>
          <p className="text-black text-[60px] m-4 font-skranji pl-[180px]">
            Full Stack Developer
          </p>
        </div>
        <div className="z-[5] mt-[100px] ">
          <img src={self} className=''/>
        </div>
        {/* <div className="absolute z-[1] w-[80%] h-[30%] rounded-full bottom-40 white__gradient" /> 
         <div className="absolute z-[0] w-[10%] h-[10%] left-20  blue__gradient" />
        <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" /> */}
      </div>
    </div>
  );
};

export default Home;
