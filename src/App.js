import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import CountryPage from "./pages/CountryPage";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />
        <Route path="/country/:name"  component={CountryPage}/>
      </Switch>
    </Router>
   
  );
}

export default App;
