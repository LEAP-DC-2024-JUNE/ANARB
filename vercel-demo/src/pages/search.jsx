import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const people = [
    {
      name: "Anar",
      age: 20,
      class: "LEAP-Chicago",
    },
    {
      name: "Anir",
      age: 20,
      class: "LEAP-Seattle",
    },
    {
      name: "Alungoo",
      age: 20,
      class: "LEAP-DC",
    },
    {
      name: "Billy",
      age: 20,
      class: "LEAP-Chicago",
    },
    {
      name: "Sumiya",
      age: 20,
      class: "LEAP-DC",
    },
  ];

  const filteredValue = people.filter((person) =>
    person.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="border-2 text-slate-950"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {filteredValue.length == 0
        ? people.map((person) => {
            return (
              <div className="border-2">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })
        : filteredValue.map((person) => {
            return (
              <div className="border-2">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })}
    </div>
  );
};
export default Search;
