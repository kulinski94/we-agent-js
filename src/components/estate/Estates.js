import React, {Component} from 'react';
import ReactList from 'react-list';
import Scroll from 'react-scroll';
import axios from 'axios';
import Button from 'react-button'
import './Estates.css';
import Estate from './Estate.js';

var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estates: []
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentWillMount() {}

  handleEstates(estates) {
    this.setState({estates});
  }

  renderItem(index, key) {
    return <Element key={this.state.estates[index].id} className="element">
      <Estate estate={this.state.estates[index]}/>
    </Element>;
  }

  componentDidMount() {
    scrollSpy.update();
    axios.get(`http://localhost:8080/api/estates`, {
      headers: {
        'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
      }
    }).then(res => {
      const estates = res.data;
      this.setState({estates});
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (

      <div>

        <ReactList itemRenderer={this.renderItem.bind(this)} length={this.state.estates.length} type='uniform'/>
        <Button className='Estates-scrollbutton' onClick={this.scrollToTop}>To top</Button>

      </div>
    );
  }
};

export default Main;
