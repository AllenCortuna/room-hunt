import { useEffect } from "react";
import { expenseStore } from "../state/expense";
import Form from "./Form";

const Home = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);

  const expense = expenseStore((state) => state.expense);
// eslint-disable-next-line
  const deleteExpense = expenseStore((state) => state.deleteExpense);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);
  // eslint-disable-next-line

  /* <h2>Daily Cost</h2> */
  return (
    <div className=" px-3 flex flex-wrap flex-row">
      <br />
      {expense?.map((expen) => (
        <div
          className="w-screen p-4 mt-3 rounded-md bg-white h-min flex flex-row flex-wrap shadow border border-gray-200"
          id={expen._id}
        >
          <div>
            <h4 className="font-medium text-sm text-gray-600  ">{expen.name}</h4>
        
            <p className="text-xs text-gray-500">Php {expen.price}</p>
            <p className="truncate text-gray-400 text-xs">{expen.detail}</p>
          </div>
        </div>
      ))}
      <Form />
    </div>
  );
};

export default Home;
