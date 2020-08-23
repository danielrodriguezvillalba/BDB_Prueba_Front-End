import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import TableEmployees from "./Components/Employees.js";
import EmployeeForm from "./Components/EmployeeRegistration.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TableEmployees} />
        <Route path="/employeeRegistration"  component={EmployeeForm} />
      </Switch>
    </Router>
  );
}

export default App;
