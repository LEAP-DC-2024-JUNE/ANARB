import { useState } from "react";

const Assignment2 = () => {
  const [number, setNumber] = useState(4);
  const array = ["apple", "banana", "kiwi", "pear"];
  const filterByLength = array.filter((element) => {
    return element.length > number;
  });
  // const handleTwo = () => {
  //   setNumber(2);
  // };
  // const handleFour = () => {
  //   setNumber(4);
  // };
  const handleNumber = (param1) => {
    setNumber(param1);
  };
  return (
    <div>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleNumber(4)}
      >
        4
      </button>
      <button
        className="border-2 bg-slate-500 p-4"
        onClick={() => handleNumber(2)}
      >
        2
      </button>
      <button
        className="border-2 bg-slate-500 p-4"
        onClick={() => handleNumber(5)}
      >
        5
      </button>
      <div>
        {filterByLength.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};
export default Assignment2;
