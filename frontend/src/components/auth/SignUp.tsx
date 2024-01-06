import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupUserMutation } from "../../services/AuthService";
import "./auth.scss";

const SignUp: React.FC = () => {
  const [signupUser] = useSignupUserMutation();
  const navigate = useNavigate();

  // logic steps
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // data
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFN] = useState("");
  const [last_name, setLN] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signupUser({
        email,
        username,
        password,
        first_name,
        last_name,
      }).unwrap();
      console.log("SIGN-UP status: 200", response);
      navigate("/auth/sign-in");
    } catch (error) {
      console.error("Failed to login: ", error);
    }
  };

  return (
    <form id="msform" onSubmit={handleSignUp}>
      {/* progressbar */}
      <ul id="progressbar">
        <li className={step === 1 ? "active" : ""}>Account Setup</li>
        <li className={step === 2 ? "active" : ""}>Personal Details</li>
      </ul>
      {/* fieldsets */}
      {step === 1 && (
        <fieldset>
          <h2 className="fs-title">Create your account</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input
            className="user-input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
            onClick={nextStep}
          />
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          {/* Поля для личных данных */}
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={(e) => setFN(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => setLN(e.target.value)}
          />
          {/* Конец полей для личных данных */}
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
            onClick={prevStep}
          />

          <button
            type="submit"
            className="submit action-button"
            formTarget="_top"
          >
            Submit
          </button>
        </fieldset>
      )}
    </form>
  );
};

export default SignUp;
