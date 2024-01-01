import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FatalError from "./components/e404";
import LoggerComp from "./components/auth/LoggerComp";
import RegistComp from "./components/auth/RegistComp";
import ChatComp from "./components/chat/ChatComp";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoggerComp />} />
        <Route path="/auth/sign-in" element={<LoggerComp />} />
        <Route path="/auth/sign-up" element={<RegistComp />} />

        <Route path="/main" element={!token ? <LoggerComp /> : <ChatComp />} />

        <Route path="*" element={<FatalError />} />
      </Routes>
    </Router>
  );
};

export default App;