import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (param1) => {
    setFirstName(param1);
  };
  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleAddress = (param1) => {
    setAddress(param1);
  };
  const handleCity = (param1) => {
    setCity(param1);
  };
  const handleZip = (param1) => {
    setZip(param1);
  };
  const handlePhone = (param1) => {
    setPhone(param1);
  };
  const handleEmail = (param1) => {
    setEmail(param1);
  };
  const submitButton = () => {
    console.log(firstName, lastName, address, city, zip, phone, email);
  };
  return (
    <div className="px-[420px] py-12 flex flex-col gap-6">
      <div className="text-center">
        <p className="font-extrabold text-3xl text-blue-400">
          New Member Registration
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>First Name</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-72 h-8"
              type="text"
              placeholder="First Name"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Last Name</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-72 h-8"
              type="text"
              placeholder="Last Name"
              onChange={(event) => handleLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Address</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-72 h-8"
              type="text"
              placeholder="Address"
              onChange={(event) => handleAddress(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Address 2</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-72 h-8"
              type="text"
              placeholder="Address"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>City</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-72 h-8"
              type="text"
              placeholder="City"
              onChange={(event) => handleCity(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>State/Province</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-48 h-8"
              type="text"
              placeholder="State"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>ZIP/Postal Code</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-24 h-8"
              type="number"
              placeholder="22203"
              onChange={(event) => handleZip(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Phone</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-96 h-8"
              type="number"
              placeholder="(___)___-____"
              onChange={(event) => handlePhone(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Email Address</span>
              <span className="text-red-600">*</span>
            </div>
            <input
              className="border-2 text-gray-900 rounded-lg w-96 h-8"
              type="email"
              placeholder="example@gmail.com"
              onChange={(event) => handleEmail(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <span>Membership Type</span>
              <span className="text-red-600">*</span>
            </div>
            <div className="flex gap-4">
              <div className="flex">
                <input
                  className="border-2 text-white"
                  type="radio"
                  id="Standard"
                />
                <label htmlFor="Standard">Standard</label>
              </div>
              <div>
                <input
                  className="border-2 text-white"
                  type="radio"
                  id="Premium"
                />
                <label htmlFor="Premium">Premium</label>
              </div>
              <div>
                <input
                  className="border-2 text-white"
                  type="radio"
                  id="Ultimate"
                />
                <label htmlFor="Ultimate">Ultimate</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={submitButton}
          className="bg-slate-500 border-2 rounded-xl w-32"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
