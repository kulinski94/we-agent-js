import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/layout/Header';
import Main from './components/Main';
import Estates from './components/estate/Estates';
import Footer from './components/layout/Footer';
import About from './components/layout/About';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div >
      <Header/>
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/estates" component={Estates}/>
      <Route path="/login" component={Login}/>
      <Route path="/profile" component={Profile}/>
      <Footer/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
