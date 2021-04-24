import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Navbar } from './components/common';
import 'semantic-ui-css/semantic.css';
import './App.css';
import Illness from "./components/pages/illness/Illness";
import { Login, Register } from "./components/login";
import SymptomList from './components/common/symptom/SymptomList';
import SymptomSearch from './components/common/symptom/SymptomSearch';
import SelectedIllness from './components/common/selectedIllness/SelectedIllness';
import DoctorPreferences from './components/common/doctorpref/DoctorPreferences';
import Record from './components/pages/record/Record';
import LandingGuest from './components/common/landing/LandingGuest';
import LandingUser from './components/common/landing/LandingUser';
import { Doctor, Profile } from './components/Doctor';
function App() {
  return (
      <Router>

          <Navbar />
          <Switch>
            <Route path= '/' exact component={LandingGuest}/>
            <Route path= '/signin' component={Login}/>
            <Route path= '/register' component={Register}/>
            <Route path= '/illness' component={Illness}/>
            <Route path= '/SymptomSearch' component={SymptomSearch}/>
            <Route path= '/SymptomList' component={SymptomList}/>
            <Route path= '/SelectedIllness' component={SelectedIllness}/>
            <Route path= '/DoctorPreferences' component={DoctorPreferences}/>
            <Route path='/record' component={Record}/>
            <Route path='/LandingUser' component={LandingUser}/>
            <Route path= '/doctor' component={Doctor}/>
            <Route path= '/profile1' component={Profile}/>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
