import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className ="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className = "itemLeft">Clicky Game</li>
                <li className = "itemCenter">{this.props.win}</li>
                <li className = "itemRight">Score: {this.props.score} Top Score: {this.props.topscore}</li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;