import { useState } from "react";

const Assignment1 = () => {
  const [value, setValue] = useState(0);
  const array = [1, 2, 3, 4, 5, 6];
  const filterEvenNumbers = array.filter((element) => {
    return element % 2 == value;
  });
  const handleOdd = () => {
    setValue(1);
  };
  const handleEven = () => {
    setValue(0);
  };
  return (
    <div>
      {/* <p>Filtered Even Numbers:</p> */}
      <button className="border-2 bg-gray-500" onClick={handleEven}>
        Even
      </button>
      <button className="border-2 bg-slate-500" onClick={handleOdd}>
        Odd
      </button>
      {filterEvenNumbers.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};
export default Assignment1;
