import React, { Component } from 'react';
import './Chess.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Chess extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.toggleChess=this.toggleChess.bind(this);
  }
  handleClick(e){
    var x=this.props.position.x;
    var y=this.props.position.y;
    e.preventDefault();
    this.toggleChess();
    console.log(x, y);
  }

  toggleChess(){
    var color = document.getElementById("Chess").background-color;
    if (color == "white"){
      color = "yellow";}
    else{
      color = "white";
    }
  }

  render() {
      var x=this.props.position.x;
      var y=this.props.position.y;

    return (
        <div className="Chess col-xs-8 col-custom-eight" 
        id="Chess" onClick={this.handleClick}>
              {x}, {y}
        </div>
    );
  }
}
export default Chess;
