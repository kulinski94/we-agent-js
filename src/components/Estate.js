import React, {Component} from 'react';

import './Estate.css';

class Estate extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-12">
            <p>{this.props.estate.name}</p>
          </div>
          <div className="col-lg-6">
            <p className="Estate-description">{this.props.estate.description}</p>
            <div className="col-lg-6">
              <p>{this.props.estate.price}</p>
            </div>
          </div>
      </div>

    );
  }
}

export default Estate;
