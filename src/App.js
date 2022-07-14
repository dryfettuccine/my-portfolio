import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Particles from "./components/Particles";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
