import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import  NavBar from './NavBar';
import Footer from './Footer.jsx';

const App=()=>{
return (
  <>
  <NavBar/>
 <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/contact' component={Contact}/>
   <Route exact path='/service' component={Service}/>
 </Switch>
 <Footer/>

  </>
)
}

export default App;