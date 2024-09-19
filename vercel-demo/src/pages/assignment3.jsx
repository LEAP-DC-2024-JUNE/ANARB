import { useState } from "react";

const Assignment3 = () => {
  const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 15 },
    { name: "Emma", age: 30 },
  ];
  const [age, setAge] = useState(0);
  const filterByAge = people.filter((element) => {
    return element.age >= age;
  });
  const handleAge = (param1) => {
    setAge(param1);
  };
  return (
    <div>
      <button className="border-2 bg-gray-500 p-4" onClick={() => handleAge(0)}>
        All age
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleAge(16)}
      >
        16+
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleAge(21)}
      >
        21+
      </button>
      <div>
        {filterByAge.map((person, index) => {
          return (
            <div key={index}>
              <span>{person.name}</span>
              <span>{person.age}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment3;
