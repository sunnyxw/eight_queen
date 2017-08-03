import React, { Component } from 'react';
import './App.css';
import Chess from './Chess/Chess'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  
  renderChessBoard(){
      var chessBoard=[];
          for(var i=0;i<8;i++)
            {
              var chessColumn=[];
                for(var j=0;j<8;j++)
                  {
                    var position={x:i, y:j};
                    chessColumn.push(<Chess position={position}/>);
                  }
              chessBoard.push(chessColumn);
            }
      return chessBoard;
  }
  render() {
    return (
      <div className="container">
        {this.renderChessBoard()}
      </div>
    );
  }
}

export default App;
