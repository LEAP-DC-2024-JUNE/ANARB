import { useState } from "react";

const Assignment2 = () => {
  const [number, setNumber] = useState(0);
  const array = ["apple", "banana", "kiwi", "pear"];
  const filterByLength = array.filter((element) => {
    return element.length > number;
  });
  console.log(filterByLength);
  return (
    <div>
      <input type="number" />
      <p>New array with only the strings that have more than n characters:</p>
      <div>
        {filterByLength.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};
export default Assignment2;
