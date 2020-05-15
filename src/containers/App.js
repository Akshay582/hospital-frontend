import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp } from "../components/index";

const DoctorList = () => <div>Doctor's Patients</div>;

const PatientReport = () => <div>Reports of Patients</div>;

const OverallStats = () => <div>Overall Stats of All Patients</div>;

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={OverallStats} />
        <Route path="/signup" component={SignUp} />
        <Route path="/list" component={DoctorList} />
        <Route path="/report" component={PatientReport} />
      </div>
    </Router>
  );
}

export default App;
