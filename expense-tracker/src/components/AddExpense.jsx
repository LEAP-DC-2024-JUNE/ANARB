"use client";

import { useState, useEffect } from "react";

const AddExpense = ({ isOpen, setIsOpen, fetchData }) => {
  const defaultData = {
    date: "",
    description: "",
    type: "",
    amount: 0.0,
  };

  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (data.date === "") {
      errors.date = "Date is required.";
    }
    if (data.description === "") {
      errors.description = "Description is required.";
    }
    if (data.type === "") {
      errors.type = "Type is required.";
    }
    if (data.amount <= 0) {
      errors.amount = "Amount is invalid.";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };
  //   const handleValueChange = (value, name, values) => {
  //     setData((prevState) => ({ ...prevState, amount: parseFloat(value) }));
  //   };
  const closeAddWindow = () => {
    setData(defaultData);
    setShowError(false);
    setIsOpen(false);
  };

  const handleClickAdd = async () => {
    if (!isFormValid) {
      setShowError(true);
      return;
    } else {
      try {
        await fetch("http://127.0.0.1:3001/api/expenses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        await fetchData();
        closeAddWindow();
      } catch (error) {
        console.error("Error adding expense:", error);
      }
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black bg-opacity-70 fixed z-10 top-0 left-0">
      <div className="bg-gray-200 p-6 flex flex-col gap-4">
        <h1 className="font-bold">Add New Expense: </h1>
        <div className="flex flex-col gap-2 text-sm items-start min-w-[14rem]">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="date" className="text-md font-semibold">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={data.date}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md w-[220px]"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-md font-semibold">
              Description:
            </label>
            <textarea
              maxLength={100}
              id="description"
              name="description"
              value={data.description}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md w-[220px]"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-md font-semibold">
              Type:
            </label>
            <select
              name="type"
              id="type"
              value={data.type}
              onChange={handleChange}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md w-[220px]"
            >
              <option value="" defaultValue={true} hidden disabled></option>
              <option value="1">Food</option>
              <option value="2">Transportation</option>
              <option value="3">Entertainment</option>
              <option value="4">Accommodation</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount" className="text-md font-semibold">
              Amount:
            </label>
            <input
              name="amount"
              id="amount"
              prefix="$"
              placeholder="Please enter a number"
              value={data.amount}
              onChange={handleChange}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md w-[220px]"
            ></input>
          </div>
        </div>

        <div className="text-red-400 font-medium text-lg">
          {showError && "Missing information."}
        </div>

        <div className="flex justify-around">
          <button
            onClick={handleClickAdd}
            className="border-[1px] border-black rounded-md p-2"
          >
            Add
          </button>
          <button
            onClick={closeAddWindow}
            className="border-[1px] border-black rounded-md p-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddExpense;
