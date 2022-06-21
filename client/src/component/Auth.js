import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../actions/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user]);

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const history = useNavigate();

  const clear = () => {
    setInput({
      email: "",
      password: "",
      confirmPassword: "",
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
      if(input.email===""){
        alert("Complete All information. Image is required ")
      }else if(input.password !== input.confirmPassword ){
        alert("Password did not match")
      }else{
        dispatch(signup(input, history));
      }
    } else {
      dispatch(signin(input, history));
    }
  };

  return (
    <div className="container">
      {/*logout first before log in and signup*/}
      {user?.result ? (
        <div className="borderline">
          <h4 className="center">Log out pls..</h4> <hr />{" "}
          <p className="center">
            Log out first, before logging in or signing up.
          </p>
          <br /> <p className="quick center">Thank you</p>
        </div>
      ) : (
        <div className="borderline">
          <h2 className="quick center">{isSignup ? "Sign Up" : "Sign in"}</h2>

          <input
            type="email"
            placeholder="email"
            required
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          )}


          <button
            style={{ backgroundColor: "#41323b", margin: "1%" }}
            variant="dark"
            type="submit"        
            onClick={handleSubmit}
          >
            <p className="quick inline">{isSignup ? "Sign Up" : "Sign In"}</p>
          </button>

          <hr />

          <button
            variant="dark"
            style={{ backgroundColor: "#41323b" }}
            type="submit"
            onClick={changeMode}
          >
            {isSignup
              ? "Already have an account? sign in"
              : "Dont have an account? sign up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;

