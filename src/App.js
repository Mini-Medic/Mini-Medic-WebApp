import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Navbar } from './components/common';
import 'semantic-ui-css/semantic.css';
import './App.css';
import Home from "./components/pages/Home";
import SymptomList from './components/common/symptom/SymptomList';
import SymptomSearch from './components/common/symptom/SymptomSearch';
import SelectedIllness from './components/common/selectedIllness/SelectedIllness';
import { Login, Register } from "./components/login/index.jsx";
function App() {
  return (
      <Router>

          <Navbar />
          <Switch>
            <Route path= '/' exact component={Home}/>
            <Route path= '/signin' component={Login}/>
            <Route path= '/register' component={Register}/>
            <Route path= '/SymptomSearch' component={SymptomSearch}/>
            <Route path= '/SymptomList' component={SymptomList}/>
            <Route path= '/SelectedIllness' component={SelectedIllness}/>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
