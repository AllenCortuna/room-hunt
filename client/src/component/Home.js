import { useEffect } from "react";
import { expenseStore } from "../state/expense";

const Home = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);

  const expense = expenseStore((state) => state.expense); 
  // WARNING: add array depe
  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line 
  },[]);

  return (
    <div className="home">
      <h2>Daily Cost</h2><br/>
      {expense.map((expen)=>(
        <div className="expense">
           <hr/>
          <h4>{expen.name}</h4>
          <p>{expen.price}</p>
          <p>{expen.detail}</p>
        </div>
      ))}
        <br/>
        <button onClick={getExpenses}>refresh</button>
        <br/>
    </div>
  )
};

export default Home;
