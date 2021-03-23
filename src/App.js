import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Navbar } from './components/common';
import './App.css';
import Home from "./components/pages/Home";
import { Login, Register } from "./components/login/index.jsx";
function App() {
  return (
      <Router>

          <Navbar />
          <Switch>
            <Route path= '/' exact component={Home}/>
            <Route path= '/signin' component={Login}/>
            <Route path= '/register' component={Register}/>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
