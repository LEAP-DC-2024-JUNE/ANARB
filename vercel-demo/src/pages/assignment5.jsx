const Assignment5 = () => {
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const filterPassingStudents = students.filter((element) => {
    return element.grade >= 60;
  });
  console.log(filterPassingStudents);
  return (
    <div>
      <p>New array containing only the students who scored 60 or more:</p>
      <div>
        {filterPassingStudents.map((student) => {
          return (
            <div>
              <div>{student.name}</div>
              <div>{student.grade}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment5;
