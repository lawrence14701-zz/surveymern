import Signup from "./components/signup/Signup";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route component={Signup} path="/" />
      </Router>
    </div>
  );
}

export default App;
