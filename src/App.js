import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Hero, Navbar } from './components/common';
import './App.css';
import Home from "./components/pages/Home";

function App() {
  return (
      <Router>

          <Navbar />
          <Switch>
            <Route path to = '/' exact component={Home}/>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
