import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

const Login = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
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
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();

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

  return <div className="login-container">
    <div className="login">
      <TextField required id="outlined-required" label="Email" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />

      {isSignup && (
        <div className="quick">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setForm({ ...form, image: base64 })}
          />
          <p> &nbsp;Location Image</p>
        </div>
      )}

      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
      <Button variant="outlined" onClick={setIsSignup}>
        {isSignup ? "Register" : "Login"}
      </Button>

      
    </div>
    </div>
  
};

export default Login;
