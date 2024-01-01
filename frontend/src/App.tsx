import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FatalError from "./components/404/e404";
import LoggerComp from "./components/auth/SignIn";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        <Route path="/main" element={!token ? <SignIn /> : <LoggerComp />} />

        <Route path="*" element={<FatalError />} />
      </Routes>
    </Router>
  );
};

export default App;