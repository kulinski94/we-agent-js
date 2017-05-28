import React, { Component } from 'react';
import './Main.css';

var Scroll    = require('react-scroll');

var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Main extends Component {

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {


    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render () {
    return (

      <div>

        <Element name="test1" className="element" >
          Estate 1
        </Element>

        <Element name="test2" className="element">
          Estate 2
        </Element>

        <Element name="test3" className="element">
          Estate 3
        </Element>

        <Element name="test4" className="element">
          Estate 4
        </Element>

        <Element name="test5" className="element">
          Estate 5
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    );
  }
};

export default Main;
