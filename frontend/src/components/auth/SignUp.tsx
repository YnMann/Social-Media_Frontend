import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSigninUserMutation } from "../../services/AuthService";
import "./auth.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/AuthSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signupUser, { isLoading }] = useSigninUserMutation();
  const navigate = useNavigate();

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      const response = await signupUser({ username: name, password }).unwrap();
      dispatch(setUser({ token: response.token, name: response.name }));
      console.log("SIGN-UP status: 200")
      navigate("/auth/sign-in");
    } catch (error) {
      console.error("Failed to login: ", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h3 className="sign-in">Sign Up</h3>
        <Link to={"/auth/sign-in"} className="button">Sign In</Link>
      </div>
      <div className="clear"></div>
      <form action="#" onSubmit={handleSignUp}>
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
        <input type="submit" disabled={isLoading} value="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
