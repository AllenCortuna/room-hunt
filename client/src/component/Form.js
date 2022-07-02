import { useState} from "react";
import { expenseStore } from "../state/expense";
 
 
 
const Form = () => {
  const getExpenses = expenseStore((state) => state.getExpenses);
  const createExpense = expenseStore((state) => state.createExpense); 
  const [form, setForm] = useState({
    name: "",
    price: "",
    detail: "",
  });
   
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
     
  const handleSubmit= () => {
    console.log('submit ok'); 
    createExpense(form);
    getExpenses();
  };
   
     
  return (
    <div className="form">
      <input type="text" name="name"  onChange={handleChange} />
      <input type="number" name="price"  onChange={handleChange} />
      <input type="text" name="detail" onChange={handleChange} />

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
