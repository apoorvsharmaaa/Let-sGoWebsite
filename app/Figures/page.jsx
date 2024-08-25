import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa"; 

function Counter({ target, text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < target) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, [count, target]);

  return (
    <div className="w-full h-[40%] bg-matteBlack rounded-lg text-center flex flex-col justify-center items-center">
      <p className="text-white text-center animate-count-up text-4xl">{count}</p>
      <h3 className="text-white text-center mb-2">{text}</h3>
      {count >= target && (
        <span className="text-white text-center absolute top-0 right-0 mr-2">
          <FaPlus />
        </span>
      )}
    </div>
  );
}

export default function Figures() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-5">
      <div>Figures And Numbers</div>
      <div className="flex w-[70%] h-[1000px] rounded-xl justify-between">
        <div className="flex flex-col w-[30%] h-full gap-4">
          <Counter target={50} text="Total Active Projects" />
          <Counter target={25} text="Total Clients" />
        </div>
        {/* <div className="flex flex-col w-[30%] h-full gap-4">
          <Counter target={35} text="Completed Projects" />
          <Counter target={40} text="Pending Projects" />
          <Counter target={20} text="Cancelled Projects" />
        </div> */}
        <div className="flex flex-col w-[30%] h-full gap-4">
          <Counter target={30} text="Experts" />
          <Counter target={98}  text="Retention Rate"  />
        </div>
      </div>
    </div>
  );
}