import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className ="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className = "itemLeft">Family guy Clicky Game</li>
                {/* <li className = "itemCenter">{this.props.win}</li> */}
                <li className = "itemCenter">Score: {this.props.score}</li>
                <li className = "itemRight"> Top Score: {this.props.topscore}</li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;