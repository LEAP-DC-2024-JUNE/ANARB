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
    <div>
      <div className="p-8 text-center font-extrabold text-3xl text-blue-400">
        <h1>New Member Registration</h1>
      </div>
      <div className="p-12 flex flex-col gap-6">
        <div className="flex gap-16 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>First Name</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="First Name"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Last Name</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="Last Name"
              onChange={(event) => handleLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-16 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Address</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="Address"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Address 2</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="Address"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-16 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>City</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="City"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 invisible">
            <div className="flex gap-1">
              <span>City</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="City"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>State/Province</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="text"
              placeholder="State"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>ZIP/Postal Code</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="number"
              placeholder="22203"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Phone</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="number"
              placeholder="(703)-474-7887"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Phone</span>
              <span>*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-64 h-8"
              type="email"
              placeholder="email"
              onChange={(event) => handleEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-1">
            <span>Membership Type</span>
            <span>*</span>
          </div>
          <input type="radio" />
        </div>
        {/* <input
          className="border-2 text-gray-900"
          type="email"
          placeholder="email"
          onChange={(event) => handleEmail(event.target.value)}
        />
        <button onClick={submitButton} className="bg-slate-500 border-2">
          Submit
        </button> */}
      </div>
    </div>
  );
};
export default Input;

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
