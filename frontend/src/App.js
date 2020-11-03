import Signup from "./components/signup/Signup";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/authcontext";
import Dashboard from "./components/Dashboard/Dashboard";
import Results from "./components/results/Results";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <AuthProvider>
            <Route component={Signup} exact path="/" />
            <Route component={Dashboard} exact path="/dashboard" />
            <Route component={Results} exact path="/results" />
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
