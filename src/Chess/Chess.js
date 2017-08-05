import React, { Component } from 'react';
import './Chess.css'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Chess extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      color:"",
      flag:0,
    };
    this.toggleChess=this.toggleChess.bind(this);
  }

  handleClick(e){
    var x=this.props.position.x;
    var y=this.props.position.y;
    e.preventDefault();
    this.state.flag^=1;
    this.toggleChess();
    console.log(x, y);
  }

  toggleChess(){
    if(this.state.flag==0){
        this.setState({color:"white"});
    }
    else{
      this.setState({color:"yellow"});
    }
  }

  render() {
      var x=this.props.position.x;
      var y=this.props.position.y;

    return (
        <div className="Chess col-xs-8 col-custom-eight" 
        onClick={this.handleClick} style={{backgroundColor:this.state.color}}>
              {x}, {y}
        </div>
    );
  }
}
export default Chess;
