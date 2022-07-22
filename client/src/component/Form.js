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
  const name = ["name", "price", "detail"];

  return (
    <div className="center align-self-center m-1 p-3 w-min grid bg-white rounded-lg mt-4 shadow border border-grey-200">
      <span className="">
        {name.map((n) => (
          <input
            autocomplete="off"
            placeholder={n}
            name={n}
            value={form.n}
            onChange={handleChange}
            className=" w-64 mt-2 border-grey border p-2 rounded-md shadow-inner focus:border-2 focus:outline-none text-sm"
          ></input>
        ))}
      </span>

      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 rounded-3xl bg-green font-medium shadow-md text-white h-max self-end text-sm "
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
