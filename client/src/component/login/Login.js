import { TextField,Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import logoIcon from '../img/logoicon.png';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [user]);

  const [form, setForm] = useState({
    hotelName: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    image: "",
  });

  const clear = () => {
    setForm({
      hotelName: "",
      location: "",
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
      image: "",
    });
  };
  // HANDLE SIGNUP
  const [isSignup, setIsSignup] = useState(false);
  const changeMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    clear();
  };
  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (
        form.hotelName === "" ||
        form.location === "" ||
        form.email === "" ||
        form.contact === "" ||
        form.image === ""
      ) {
        alert("Complete All information. Image is require");
      } else if (form.password !== form.confirmPassword) {
        alert("Password did not match");
      } else {
        dispatch(signup(form, history));
      }
    } else {
      dispatch(signin(form, history));
    }
  };

  return <div className="login">
    <img src={logoIcon} alt=""/>
    <h3>Room Hunt</h3>
    {isSignup && (
      <>
      <TextField required label="Hotel Name" />
      <TextField required label="Location" />
      <TextField required label="Phone Number" type="number"/>
      </>
      )}
      <TextField required label="Email" type="email"/>
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
      />

      {isSignup && (
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setForm({ ...form, image: base64 })}
        />
      )}

      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
      <Button variant="outlined" onClick={changeMode}>
        {isSignup ?"already have an account?Login":"dont have an account? Register"}
      </Button>

    </div>
  
};

export default Login;
