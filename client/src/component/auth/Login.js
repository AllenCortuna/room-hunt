import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

const SignUp = () => {
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
      if(form.hotelName==="" || form.location==="" || form.email==="" || form.contact==="" || form.image===""){
        alert("Complete All information. Image is required  😀")
      }else if(form.password !== form.confirmPassword ){
        alert("Password did not match")
      }else{
        dispatch(signup(form, history));
      }
    } else {
      dispatch(signin(form, history));
    }
  };

  return(
    <div className="login-container">
      <div>
        
      <TextField id="outlined-basic" label="hotela""me" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  )
};

export default SignUp;
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

