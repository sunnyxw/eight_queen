import React, { Component } from 'react';
import './App.css';
import Chess from './Chess/Chess'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    var chessBoard=[];
    for(var i=0;i<8;i++)
      {
        var chessColumn=[];
          for(var j=0;j<8;j++)
            {
              chessColumn.push(<Chess />);
            }
        chessBoard.push(chessColumn);
      }

    return (
      <div className="container">
        {chessBoard}
      </div>
    );
  }
}

export default App;
