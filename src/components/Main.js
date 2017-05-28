import React, {Component} from 'react';
import ReactList from 'react-list';
import Scroll from 'react-scroll';
import './Main.css';

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

  componentWillMount() {

    var estates = [
      {
        id: 'estate1',
        name: "RaliCastle1"
      }, {
        id: 'estate2',
        name: "RaliCastle2"
      }, {
        id: 'estate3',
        name: "RaliCastle3"
      }, {
        id: 'estate4',
        name: "RaliCastle3"
      }
    ];
    this.handleEstates(estates);
  }

  handleEstates(estates) {
    this.setState({estates});
  }

  renderItem(index, key) {
    return <Element key={this.state.estates[index].id} className="element">{this.state.estates[index].name}
    </Element>;
  }

  componentDidMount() {
    scrollSpy.update();

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

        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    );
  }
};

export default Main;
