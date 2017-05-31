import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div >
      <Header/>
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Footer/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
