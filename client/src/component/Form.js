

import {useState} from "react";
import {expendStore} from "../state/expenses";

const Form = () => {

  const createExpense = expendStore(state => state.createExpense);
  const [form,setForm] = useState({
      name: "",
      price: 0,
      detail: "",
  });

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = () => {
    createExpense(form);
  }
  return (
    <div className="form">
      <input type="text" name='name' placeholder="expenses name" onChange={handleForm}/>
      <input type="number" name='price' placeholder="total" onChange={handleForm}/>
      <input type="text" name='detail' placeholder="detail" onChange={handleForm}/>


      <button type="submit" onClick={handleSubmit}> Submit</button>

    </div>

    );
}

export default Form

