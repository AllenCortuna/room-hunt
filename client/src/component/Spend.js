
import { useEffect } from 'react';
import {expendStore} from "../state/expenses";


const Spend = () => {
  const getExpenses = expendStore(state => state.getExpenses);
  const expenses = expendStore(state => state.expenses)

  useEffect(() =>{
    getExpenses();
  },[expenses,getExpenses])

  return(
    <div className="spend">
      <h2>Daily expenses</h2>
      <hr/>
      {expenses?.map((expens) => (
        <div className="expenses">
          <p>{expens.name}</p>
          <p>{expens.price}</p>
          <p>{expens.detail}</p>
        </div>
      ))}

      <hr/>
    </div>
      );
};

export default Spend;
