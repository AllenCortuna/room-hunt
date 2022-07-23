import React from "react";
import { useState } from "react";
import {UserCircleIcon} from "@heroicons/react/solid";
const Login = () => {
  const formClass =
    "w-full font-regular m-auto w-64 mt-3 border-grey-400 border p-2 rounded focus:border-2 focus:outline-none text-sm";

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="flex flex-wrap justify-center align-center pt-10">
      <div className="text-center m-3 p-4 bg-white h-auto w-auto rounded-md shadow ">

        <h1 className=" font-semibold text-gray-600 text-xl"><UserCircleIcon className="w-8 inline mr-2"/>{mode ? "Login" : "Signup"} </h1>
        <input
          className={formClass}
          name="email"
          type="email"
          autocomplete="off"
          placeholder="email@example.com"
          onChange={handleChange}
        ></input>
        <input
          className={formClass}
          name="password"
          type="password"
          autocomplete="off"
          placeholder="password"
          onChange={handleChange}
        ></input>

        {mode && (
          <input
            className={formClass}
            name="confirmPassword"
            type="password"
            autocomplete="off"
            placeholder="confirm password"
            onChange={handleChange}
          ></input>
        )}
    {/* index css className*/}
        <button className="btn-submit">{mode ? "Login" : "Signup"}</button>
        <button className="btn-mode" onClick={handleMode}>
          {mode
            ? "Dont have an Account? Signup"
            : "Already have an Account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
