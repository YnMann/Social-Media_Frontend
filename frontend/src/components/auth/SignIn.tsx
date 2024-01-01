import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSigninUserMutation } from "../../services/AuthService";
import "./auth.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/AuthSlice";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signinUser, { isLoading }] = useSigninUserMutation();
  const navigate = useNavigate();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      const response = await signinUser({ username: name, password }).unwrap();
      dispatch(setUser({ token: response.token, name: response.name }));
      localStorage.setItem("token", response.token);
      navigate("/main");
    } catch (error) {
      console.error("Failed to login: ", error);
      // Additional error handling here
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h3 className="sign-in">Sign in</h3>
        <div className="button">Register</div>
      </div>
      <div className="clear"></div>
      <form action="#" onSubmit={handleSignIn}>
        <div>
          <label className="user" htmlFor="name">
            <i className="fa-solid fa-user"></i>
          </label>
          <input
            className="user-input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="lock" htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <input type="submit" disabled={isLoading} value="Sign in" />
        <div className="radio-check">
          <input
            type="radio"
            className="radio-no"
            id="no"
            name="remember"
            value="no"
            defaultChecked
          />
          <label htmlFor="no">
            <i className="fa fa-times"></i>
          </label>
          <input
            type="radio"
            className="radio-yes"
            id="yes"
            name="remember"
            value="yes"
          />
          <label htmlFor="yes">
            <i className="fa fa-check"></i>
          </label>
          <span className="switch-selection"></span>
        </div>
        <span className="check-label">Remember me</span>
        <span className="forgot-label">Lost your password?</span>
        <div className="clear"></div>
      </form>
    </div>
  );
};

export default SignIn;
