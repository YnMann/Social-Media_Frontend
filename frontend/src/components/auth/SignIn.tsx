import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninUserMutation } from "../../services/AuthService";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/AuthSlice";
import "./auth.scss";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signinUser] = useSigninUserMutation();
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
    }
  };

  return (
    <form id="msform" onSubmit={handleSignIn}>
      <fieldset>
        <h2 className="fs-title">Sign In</h2>
        <h3 className="fs-subtitle">Welcome</h3>
        <input
          type="text"
          name="email"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          name="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <input type="password" name="cpass" placeholder="Confirm Password" />
        <button
          type="submit"
          className="submit action-button"
          formTarget="_top"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default SignIn;
