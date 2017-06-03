import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './components/Main';
import Estates from './components/Estates';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div >
      <Header/>
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/estates" component={Estates}/>
      <Route path="/login" component={Login}/>
      <Footer/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
