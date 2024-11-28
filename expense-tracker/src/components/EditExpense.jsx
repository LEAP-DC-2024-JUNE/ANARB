"use client";

import { useState, useEffect } from "react";

const EditExpense = ({
  id,
  setId,
  fetchData,
  expense,
  expenses,
  isOpen,
  setIsOpen,
  exp,
}) => {
  const defaultData = {
    date: "",
    description: "",
    type: "",
    amount: 0,
  };
  //   console.log(exp);

  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData((prevState) => ({ ...prevState, [id]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!data.date) {
      errors.date = "Date is required.";
    }
    if (!data.description) {
      errors.description = "Description is required.";
    }
    if (!data.type) {
      errors.type = "Type is required.";
    }
    if (data.amount <= 0) {
      errors.amount = "Amount is invalid.";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const closeEditWindow = () => {
    setId(-1);
    setData(defaultData);
    setShowError(false);
    setIsOpen(false);
  };

  const handleClickEdit = async () => {
    validateForm();
    if (!isFormValid) {
      setShowError(true);
      return;
    } else {
      await fetch(`http://127.0.0.1:3001/api/expenses/${expense.pk_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await fetchData();
      closeEditWindow();
      console.log(expense.pk_id);
      console.log(data);
    }
  };

  useEffect(() => {
    if (expense) {
      setData(expense);
    }
  }, [expense]);

  useEffect(() => {
    validateForm();
  }, [data]);

  if (!isOpen || data.amount == 0) return null;

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black bg-opacity-70 fixed z-10 top-0 left-0">
      <div className="bg-gray-200 p-6 flex flex-col gap-4">
        <div>
          <h1 className="font-bold">Edit Expense: </h1>
        </div>
        <div className="flex flex-col gap-2 text-sm items-start min-w-[14rem]">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="date" className="text-md font-semibold">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={data?.date}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md"
              onChange={(event) =>
                setData({ ...data, date: event.target.value })
              }
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="description" className="text-md font-semibold">
              Description:
            </label>
            <textarea
              maxLength={100}
              id="description"
              name="description"
              value={data?.description}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md"
              placeholder="Description"
              onChange={(event) =>
                setData({ ...data, description: event.target.value })
              }
            ></textarea>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="type" className="text-md font-semibold">
              Type:
            </label>
            <select
              name="type"
              id="type"
              value={data?.type}
              onChange={(event) =>
                setData({ ...data, type: event.target.value })
              }
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md"
            >
              <option value="" defaultValue={true} hidden disabled></option>
              <option value="1">Food</option>
              <option value="2">Transportation</option>
              <option value="3">Entertainment</option>
              <option value="4">Accommodation</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="amount" className="text-md font-semibold">
              Amount:
            </label>
            <input
              name="amount"
              id="amount"
              //   placeholder="Please enter a number"
              value={data?.amount}
              onChange={handleChange}
              className="text-black border-[1px] py-[2px] px-[2px] rounded-md"
            ></input>
          </div>
        </div>

        <div className="text-red-400 font-medium text-lg">
          {showError && "Missing information."}
        </div>

        <div className="flex justify-around">
          <button
            onClick={handleClickEdit}
            className="border-[1px] border-black rounded-md p-2"
          >
            Edit
          </button>
          <button
            onClick={closeEditWindow}
            className="border-[1px] border-black rounded-md p-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditExpense;
