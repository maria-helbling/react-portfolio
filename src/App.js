import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'



function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <About/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </Router>

   
  );
}

export default App;
