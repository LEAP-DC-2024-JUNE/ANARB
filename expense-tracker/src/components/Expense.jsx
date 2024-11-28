"use client";

import { useEffect } from "react";
import EditExpense from "@/components/EditExpense";

const moment = require("moment");
const Expense = ({
  expense,
  isEditOpen,
  setIsEditOpen,
  fetchData,
  editId,
  setEditId,
  expenses,
}) => {
  const formatDate = (date) => {
    return moment(date).format("L");
  };
  const handleAction = async (event) => {
    const action = event.target.value;
    if (action === "edit") {
      setEditId(expense.id);
      setIsEditOpen(true);
      console.log(expense);
      console.log(expense.pk_id);
    } else if (action === "delete") {
      await fetch(`http://127.0.0.1:3001/api/expenses/${expense.pk_id}`, {
        method: "DELETE",
      });
      await fetchData();
    }
    event.target.value = "";
  };

  return (
    <tr>
      <td className="p-2">{formatDate(expense.c_date)}</td>
      <td className="p-2">{expense.c_description}</td>
      <td className="p-2">{expense.c_type}</td>
      <td className="p-2">${expense.c_amount}</td>
      <td className="">
        <select className="" onChange={(event) => handleAction(event)}>
          <option value=""></option>
          <option value="edit" className="text-slate-300 p-4">
            Edit
          </option>
          <option value="delete" className="text-red-300 p-4">
            Delete
          </option>
        </select>
      </td>
      {/* <EditExpense
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        id={editId}
        setId={setEditId}
        // expense={expenses.find((expense) => expense.id === editId)}
        fetchData={fetchData}
        exp={expense}
      /> */}
    </tr>
  );
};
export default Expense;
