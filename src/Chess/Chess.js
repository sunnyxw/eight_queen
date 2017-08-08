import React, { Component } from 'react';
import './Chess.css'

class Chess extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleChess = this.toggleChess.bind(this);
    this.watchQueenList = this.watchQueenList.bind(this);
    this.state = {
      color: "",
      flag: 0,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.watchQueenList();
    console.log(this.props.position.x, this.props.position.y);
  }

  toggleChess() {
    var x = this.props.position.x;
    var y = this.props.position.y;
    if (this.state.flag == 0) {
      this.setState({ color: "yellow" });
      this.setState({flag: 1});
      this.props.queenList.push({x, y});
    }
    else {
      this.setState({ color: "white" });
      this.setState({flag: 0});
      var index = this.props.queenList.indexOf({x, y});
      this.props.queenList.splice(index, 1);
    }
  }

  watchQueenList() {
    var sig = 0;
    if (this.props.queenList.length == 8) {
      console.log(this.props.queenList);
      console.log(this.props.position);
      for(var i=0; i<8;i++){
          if (this.props.position.x == this.props.queenList[i].x
          && this.props.position.y == this.props.queenList[i].y){
            this.toggleChess();
            sig = 1;
            break;
          }
      }
      if(sig == 0){
            alert("please uncheck one yellow box first!");
      }
    }
    else {
      this.toggleChess();
    }
  }

  render() {
    var x = this.props.position.x;
    var y = this.props.position.y;

    return (
      <div className="Chess col-xs-8 col-custom-eight"
        onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>
        {x}, {y}
      </div>
    );
  }
}
export default Chess;
