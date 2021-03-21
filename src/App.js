import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Header, Navbar } from './components/common';
import './App.css';


function App() {
  return (
      <Router>

          <Navbar />
          <Switch>

          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
