"use client";

import { useEffect } from "react";

const moment = require("moment");
const Expense = ({
  expense,
  isEditOpen,
  setIsEditOpen,
  fetchData,
  editId,
  setEditId,
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
      <td>
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
    </tr>
  );
};
export default Expense;
