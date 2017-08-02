import React, { Component } from 'react';
import './Chess.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Chess extends Component {
  render() {
    return (
        <div className="Chess col-xs-8 col-custom-eight">
              {this.props.position.x}, {this.props.position.y}
        </div>
    );
  }
}
export default Chess;
