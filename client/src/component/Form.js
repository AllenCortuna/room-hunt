import { useState } from "react";
import { expenseStore } from "../state/expense";

const Form = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);
  const createExpense = expenseStore((state) => state.createExpense);
  const [form, setForm] = useState({
    name: "",
    price: "",
    detail: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("submit ok");
    createExpense(form);
    getExpenses();
  };
  const name= [
  ]

  return (
    <div className="p-4 grid">
      <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-purple-900 font-bold drop-shadow-lg text-white justify-self-end">Submit</button>

    </div>
  );
};

export default Form;
