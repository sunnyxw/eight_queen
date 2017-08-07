import React, { Component } from 'react';
import './App.css';
import Chess from '../Chess/Chess'

class App extends Component {
  constructor(props){
    super(props);
    this.renderChessBoard=this.renderChessBoard.bind(this);
    this.state={
      queenList:[],
      position:{},
    };
  }
  renderChessBoard(){
      var chessBoard=[];
          for(var i=0;i<8;i++)
            {
              var chessColumn=[];
                for(var j=0;j<8;j++)
                  {
                    this.state.position={x:i, y:j};
                    chessColumn.push(<Chess position={this.state.position} queenList={this.state.queenList}/>);
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
