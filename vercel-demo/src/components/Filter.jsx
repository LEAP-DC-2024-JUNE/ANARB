import { useState } from "react";

const Filter = () => {
  //   const array = [1, 2, 3, 4];
  //   const filteredArray = array.filter((element) => {
  //     return element > 2;
  //   });
  //   return <div>{filteredArray}</div>;
  const [age, setAge] = useState(18);
  const array = [
    {
      name: "Dul",
      age: 18,
    },
    {
      name: "Alungoo",
      age: 17,
    },
    {
      name: "Sumiya",
      age: 19,
    },
  ];
  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });
  const handleClick = () => {
    setAge(0);
  };
  const handleClickAdult = () => {
    setAge(18);
  };

  return (
    <div>
      <button className="border-2 bg-yellow-400" onClick={handleClickAdult}>
        Nasand hursen humuus
      </button>
      <button className="border-2 bg-green-500" onClick={handleClick}>
        Buh nasniihan
      </button>
      <div>
        {filteredArray.map((person, index) => {
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
export default Filter;
