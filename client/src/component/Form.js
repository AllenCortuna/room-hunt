import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createExpense } from "../actions/expenses";
const Form = () => {
  // const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    price: 0,
    detail: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // dispatch(createExpense(form));
    alert('ok submit');
    // clear();
  };

  return (
    <div className="form">
      <input
        type="text"
        name="name"
        placeholder="expenses name"
        onChange={handleForm}
      />
      <input
        type="number"
        name="price"
        placeholder="total"
        onChange={handleForm}
      />
      <input
        type="text"
        name="detail"
        placeholder="detail"
        onChange={handleForm}
      />

      <button type="submit" onClick={handleSubmit}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Form;
