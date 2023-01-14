import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import JobList from "./components/JobList";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/job_list" component={JobList} />
        <Route exact path="/job_detail/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
