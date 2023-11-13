import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);


  const increment = () => {
    setCounter(counter + 1);
  };

  const dicrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };



  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="">
        <div className="my-8 text-8xl text-center">{counter}</div>
        <div className="mb-8 text-white font-bold">
          <button
            className="bg-blue-500 hover:bg-blue-700  py-4 px-6 rounded mx-4"
            onClick={dicrement}
          >
            -
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700  py-4 px-6 rounded mx-4"
            onClick={increment}
          >
            +
          </button>
          <button
            className="reset bg-red-500 hover:bg-red-700 py-4 px-6 rounded mx-4"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
