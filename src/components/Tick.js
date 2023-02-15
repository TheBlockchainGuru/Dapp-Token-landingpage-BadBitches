import tick from "../assets/image/tick.png";
export default function Tick(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-full w-[50px] h-[50px] bg-[#E88034] flex justify-center items-center">
        <img src={tick} alt={tick} className="w-[50%] h-[50%]" />
      </div>
      <div className="mt-4 px-8 py-2 rounded-full w-[85%] bg-[#232428] text-white">
        {props.step}
      </div>
    </div>
  );
}
