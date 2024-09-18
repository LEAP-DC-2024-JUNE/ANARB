const Assignment1 = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const filterEvenNumbers = array.filter((element) => {
    return element % 2 == 0;
  });
  return (
    <div>
      <p>Filtered Even Numbers:</p>
      {filterEvenNumbers.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};
export default Assignment1;
