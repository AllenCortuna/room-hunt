import { useEffect } from "react";
import { expenseStore } from "../state/expense";
import Form from "./Form";

const Home = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);

  const expense = expenseStore((state) => state.expense);
  const deleteExpense = expenseStore((state) => state.deleteExpense);

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <h2>Daily Cost</h2>
      <br />
      {expense?.map((expen) => (
        <div className="expense" id={expen._id}>
          <hr />
          <h4>{expen.name}</h4>
          <p>{expen.price}</p>
          <p>{expen.detail}</p>
          <button
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
