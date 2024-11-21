"use client";

import AddExpense from "@/components/AddExpense";
import EditExpense from "@/components/EditExpense";
import Expense from "@/components/Expense";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  // let data = await fetch("http://127.0.0.1:3001/api/expenses");
  // let expenses = await data.json();
  // console.log(expenses);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [expenses, setExpenses] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3001/api/expenses");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setExpenses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h1 className="text-2xl text-center pt-2">Expenses</h1>
      <div className="p-4">
        <table className="w-full border-collapse border-[1px] border-black text-xs">
          <thead>
            <tr className="bg-slate-300">
              <th className="p-2">Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, i) => (
              <Expense
                expense={expense}
                isEditOpen={isEditOpen}
                editId={editId}
                setIsEditOpen={setIsEditOpen}
                setEditId={setEditId}
                fetchData={fetchData}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            setIsAddOpen(true);
          }}
          className="border-2 rounded-md border-black p-1 text-sm"
        >
          Add Expense
        </button>
        <Link href="/chart">
          <button className="border-2 rounded-md border-black p-1 text-sm">
            Show Chart
          </button>
        </Link>
      </div>
      <AddExpense
        isOpen={isAddOpen}
        setIsOpen={setIsAddOpen}
        fetchData={fetchData}
      />
      <EditExpense
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        id={editId}
        setId={setEditId}
        expense={expenses.find((expense) => expense.id === editId)}
        fetchData={fetchData}
      />
    </div>
  );
};
export default Home;
