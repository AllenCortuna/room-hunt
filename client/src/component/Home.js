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
        <div className="p-4 mt-2 bg-white rounded-lg shadow-lg" id={expen._id}>
          <h4 className="">{expen.name}</h4>
          <p >{expen.price}</p>
          <p>{expen.detail}</p>
          <button
            onClick={() => {
              deleteExpense(expen._id);
            }}
        className=""
          >
            delete
          </button>
        </div>
      ))}
    <br />
    <button className="px-2 bg-violet-500">
  Save changes
</button>
      <button onClick={getExpenses}>refresh</button>
      <br />
      <Form />
    </div>
  );
};

export default Home;
