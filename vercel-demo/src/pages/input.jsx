import { useState } from "react";

const Input = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleFirstName = (param1) => {
    setFirstName(param1);
  };
  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleEmail = (param1) => {
    setEmail(param1);
  };
  const submitButton = () => {
    console.log(firstName, lastName, email);
  };
  return (
    <div className="flex gap-16">
      <input
        className="border-2 text-gray-900"
        type="text"
        placeholder="First Name"
        onChange={(event) => handleFirstName(event.target.value)}
      />
      <input
        className="border-2 text-gray-900"
        type="text"
        placeholder="Last Name"
        onChange={(event) => handleLastName(event.target.value)}
      />
      <input
        className="border-2 text-gray-900"
        type="email"
        placeholder="email"
        onChange={(event) => handleEmail(event.target.value)}
      />
      <button onClick={submitButton} className="bg-slate-500 border-2">
        Submit
      </button>
    </div>
  );
  // <div className="flex gap-8 flex-col w-48">
  //   <input
  //     className="border-2 text-gray-900"
  //     type="text"
  //     placeholder="Text"
  //   />
  //   <input
  //     className="border-2 text-gray-900"
  //     type="password"
  //     placeholder="***"
  //   />
  //   <input
  //     className="border-2 text-gray-900"
  //     type="email"
  //     placeholder="qwerty@gmail.com"
  //   />
  //   <input
  //     className="border-2 text-gray-900"
  //     type="number"
  //     placeholder="123"
  //   />
  //   <input className="border-2 text-gray-900 w-12 h-12" type="checkbox" />
  //   <input className="border-2 text-gray-900" type="radio" />
  //   <input className="border-2 text-gray-900" type="hidden" />
  //   <input className="border-2 text-gray-900" type="button" />
  //   <input className="border-2 text-gray-900" type="color" />
  //   <input className="border-2" type="file" />
  //   <input className="border-2" type="image" />
  // </div>
};
export default Input;
