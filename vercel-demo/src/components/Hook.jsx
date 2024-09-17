import { useState } from "react";
const Hook = () => {
  const [name, setName] = useState("Billy");
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setName("Test");
    setNumber(number + 1);
  };
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const toggleButton = () => {
    setButton(!button);
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>{number} times clicked</button>
      <div>
        <p>Count: {count}</p>
        <div className="flex gap-2">
          <button className="border-2 p-2" onClick={countUp}>
            +
          </button>
          <button className="border-2 p-2" onClick={countDown}>
            -
          </button>
        </div>
      </div>
      <div onClick={toggleButton}>
        {button == true ? (
          <button className="p-2 border-2 bg-green-600">ON</button>
        ) : (
          <button className="p-2 border-2 bg-red-600">OFF</button>
        )}
      </div>
    </div>
  );
};
export default Hook;
