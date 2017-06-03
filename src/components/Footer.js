import React from "react"
var Link = require('react-router-dom').Link

import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">

        <div className="Footer-footer">

            <li><Link to="/about">About</Link></li>
            <li><Link to="/estates">Estates</Link></li>

        </div>

      </div>
    )
  }
}
