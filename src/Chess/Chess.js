import React, { Component } from 'react';
import './Chess.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Chess extends Component {
  render() {
      var x=this.props.position.x;
      var y=this.props.position.y;
    
      function handleClick(e){
        e.preventDefault();
        console.log(x, y);
      }

    return (
        <div className="Chess col-xs-8 col-custom-eight" 
        id={(x, y)} onClick={handleClick}>
              {x}, {y}
        </div>
    );
  }
}
export default Chess;
