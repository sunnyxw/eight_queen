import React, { Component } from 'react';
import './Chess.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Chess extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    var x=this.props.position.x;
    var y=this.props.position.y;
    e.preventDefault();
    console.log(x, y);
  }

  render() {
      var x=this.props.position.x;
      var y=this.props.position.y;

    return (
        <div className="Chess col-xs-8 col-custom-eight" 
        id={(x, y)} onClick={this.handleClick}>
              {x}, {y}
        </div>
    );
  }
}
export default Chess;
