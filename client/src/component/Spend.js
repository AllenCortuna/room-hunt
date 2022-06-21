
import {useDispatch,  useSelector } from 'react-redux';
import {getExpenses} from "../actions/expenses";
import {useEffect } from 'react';
const Spend = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getExpenses());
  },[dispatch])

  const expenses = useSelector(state => state.expenses)
  return(
    <div className="spend">
      <h2>Daily expenses</h2>
      <hr/>
      {expenses?.map((expense)=>(
        <div className="expense">
          <p>{expense.name}</p>
          <p>{expense.price}</p>
        </div>
      ))}
      <hr/>
    </div>
      );
};

export default Spend;
