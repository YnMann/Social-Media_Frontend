import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FatalError from "./e404";
import LoggerComp from "./auth/LoggerComp";
import RegistComp from "./auth/RegistComp";
import ChatComp from "./chat/ChatComp";

const App = () => {
  const match = window.location.href.split("/");
  // const isLoading = useSelector((state) => state.isLoading);

  return (
    <Router>
      {/* Показать анимацию, если isLoading === true */}
      {/* {isLoading && <LoadingSpinner />}  */}

      <Routes>
        <Route path="/" element={<LoggerComp />} />
        <Route path="/login" element={<LoggerComp />} />
        <Route path="/registration" element={<RegistComp />} />

        <Route path="/main" element={<ChatComp />} />

        <Route path="*" element={<FatalError />} />
      </Routes>
    </Router>
  );
};

export default App;