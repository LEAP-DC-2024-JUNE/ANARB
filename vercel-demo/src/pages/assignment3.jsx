const Assignment3 = () => {
  const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 15 },
    { name: "Emma", age: 30 },
  ];
  const filterByAge = people.filter((element) => {
    return element.age >= 18;
  });
  return (
    <div>
      <p>New array containing only the people who are 18 or older:</p>
      <div>
        {filterByAge.map((person) => {
          return (
            <div>
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
