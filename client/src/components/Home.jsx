import { self } from "../assets";

const Home = () => {
  return (
    <div className="flex row justify-end">
      <div className="mt-7 z-[5]">
      <h1 className="text-white text-[120px] font-skranji font-bold">Erich Ebbinghaus</h1>
      <p className="text-white text-[60px] m-7 font-skranji">Full Stack Developer</p>
      </div>
      <div className="z-[5]">
        <img src={self} />
      </div>
      <div className="absolute z-[1] w-[80%] h-[30%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-20  blue__gradient" />
      <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
    </div>
  );
};

export default Home;
