import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <h2>Welcome to React routing</h2>
         <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/login'}>Login</Link></li>
           <li><Link to={'/register'}>Register</Link></li>
         </ul>
         <hr/>

         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/register' component={Register}/>
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;