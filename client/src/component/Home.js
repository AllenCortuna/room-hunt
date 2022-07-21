import { useEffect } from "react";
import { expenseStore } from "../state/expense";
import Form from "./Form";

const Home = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);

  const expense = expenseStore((state) => state.expense);
  const deleteExpense = expenseStore((state) => state.deleteExpense);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);
  // eslint-disable-next-line

  /* <h2>Daily Cost</h2> */
  return (
    <div className=" px-3 flex bg-secondary flex-wrap flex-row">
      <br />
      {expense?.map((expen) => (
        <div
          className="w-screen p-4 mt-2 rounded-md bg-white h-20 flex flex-row flex-wrap shadow-sm border-2 border-gray-100"
          id={expen._id}
        >
          <div>
            <h4 className="font-semibold text-sm text-black">{expen.name}</h4>

            <p className="text-sm text-green">{expen.price}</p>
            <p className="">{expen.detail}</p>
          </div>
        </div>
      ))}
      <Form />
    </div>
  );
};

export default Home;
