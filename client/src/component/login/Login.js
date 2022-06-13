import { TextField, Button } from "@mui/material";
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
  //CHANDLE CHANGE
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // TODO: Form validation //
      // checkInfo()
      dispatch(signup(form, history));
      }
     else {
      dispatch(signin(form, history));
    }
  };

  return <div className="login-container">
    <div className="login">
    <img src={logoIcon} alt=""/>
    <h3>Room Hunt</h3>
    {isSignup && (
      <>
      <TextField required label="Hotel Name" variant="filled" nama="hotelName" onChange={handleChange}/>
      <TextField required label="Location" name="location" onChange={handleChange}/>
      <TextField required label="Phone Number" type="contact)" name="contact" onChange={handleChange}/>
      </>
      )}
      <TextField required label="Email" type="email"/>
      <TextField label="Password" type="password" autoComplete="current-password" name="password" onChange={handleChange}/>

      {isSignup && (
        <>
      <TextField label="Comfirm Password" type="password" autoComplete="current-password" name="confirmPassword" onChange={handleChange}/>
        <p>Select Hotel/Dorm Image</p>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setForm({ ...form, image: base64 })}
      />
        </>
      )}
<button className="button1">SUBMIT</button>
      <Button variant="outlined" onClick={changeMode}>
        {isSignup ?"already have an account?Login":"dont have an account? Register"}
      </Button>

    </div>
    </div>
};

export default Login;
