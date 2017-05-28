import React from "react"
import logo from './real-estate-logo.jpg';
import './Header.css';

export default class Footer extends React.Component {
	render () {
		return (
			<div className="Header">

				<div className="Header-header">

        <img src={logo} className="Header-logo" alt="logo" />
        <h2>Welcome to Wise Estate Agent</h2>
				</div>

			</div>
		)
	}
}
