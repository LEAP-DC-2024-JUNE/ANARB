"use client";

import AddExpense from "@/components/AddExpense";
import EditExpense from "@/components/EditExpense";
import Expense from "@/components/Expense";
import Link from "next/link";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import { Charts } from "@/components/Charts";

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
      <h1 className="text-2xl text-center pt-2 md:text-3xl">Expenses</h1>
      <div className="p-4 md:px-[200px]">
        <table className="w-full border-collapse border-[1px] border-black text-xs md:text-lg">
          <thead>
            <tr className="bg-slate-300">
              <th className="p-2">Date</th>
              <th className="">Description</th>
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
          className="border-2 rounded-md border-black p-1 text-sm md:text-lg md:p-[10px]"
        >
          Add Expense
        </button>
        <Link href="/charts">
          <button className="border-2 rounded-md border-black p-1 text-sm md:text-lg md:p-[10px]">
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
        expenses={expenses}
      />
      <div className="md:px-[200px] md:pt-[50px]">
        <Charts expenses={expenses} />
      </div>
    </div>
  );
};
export default Home;
