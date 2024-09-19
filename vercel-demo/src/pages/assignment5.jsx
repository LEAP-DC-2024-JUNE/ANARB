import { useState } from "react";

const Assignment5 = () => {
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
    { name: "Mark", grade: 65 },
  ];
  const [grade, setGrade] = useState(0);
  const filterPassingStudents = students.filter((element) => {
    return element.grade >= grade;
  });
  const handleGrade = (param1) => {
    setGrade(param1);
  };
  return (
    <div>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleGrade(50)}
      >
        50+
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleGrade(60)}
      >
        60+
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleGrade(70)}
      >
        70+
      </button>
      <button
        className="border-2 bg-gray-500 p-4"
        onClick={() => handleGrade(80)}
      >
        80+
      </button>
      <div>
        {filterPassingStudents.map((student, index) => {
          return (
            <div key={index}>
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
