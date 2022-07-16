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

  return (
    <div className="min-h-screen px-2 grid bg-grey ">
      <h2>Daily Cost</h2>
      <br />
      {expense?.map((expen) => (
        <div
          className="p-4 mt-2 bg-white rounded-md shadow-md h-24 grid grid-rows-3"
          id={expen._id}
        >
          <div>
            <h4 className="">{expen.name}</h4>
            <p>{expen.price}</p>
            <p className="">{expen.detail}</p>
          </div>
          <button
            className="justify-self-end border-red-500 text-red-500 font-medium leading-3 border px-3 py-2 rounded-md "
            onClick={() => {
              deleteExpense(expen._id);
            }}
          >
            delete
          </button>
        </div>
      ))}
      <br />
      <button onClick={getExpenses}>refresh</button>
      <br />
      <Form />
    </div>
  );
};

export default Home;
