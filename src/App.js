import React from 'react'
import { Footer, Header } from './components/common';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
        <Router>
            <Header />
            <Switch>
                <Route path={'/'} exact component/>
            </Switch>
            <Footer />
        </Router>
    </>
  );
}

export default App;
