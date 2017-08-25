import React, { Component } from 'react';
import './App.css';
import Chess from '../Chess/Chess';
import { Button } from 'react-bootstrap';
// import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.renderChessBoard=this.renderChessBoard.bind(this);
    this.sendData=this.sendData.bind(this);
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

  sendData(e){
    e.preventDefault();
    var axios = require('axios');
      var url = "http://localhost:5000/getList";
      var data = this.state.queenList;
      // var config = {
      //   headers:{'Access-Control-Allow-Origin':'*'}
      // };
      console.log(data);
      axios.post(url, data)
        .then((response)=>{
          console.log(response);
          alert(response.data);
        });
      console.log("button clicked!")
  }

  render() {
    return (
      <div className="container">
        <div className = "banner">
          <button className="btn btn-primary" onClick={this.sendData}>Test my answer!</button>
        </div>
        {this.renderChessBoard()}
      </div>
    );
  }
}

export default App;
