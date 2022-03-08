import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: ""
    }
  }

componentDidMount(){
  let treasure = Math.floor(Math.random() *
  this.state.board.length)
  this.setState({treasureLocation: treasure})
}

  handleGamePlay = (index) => {
    const { board, treasureLocation } = this.state
    if(index === treasureLocation){
      board[index] = "❤️"
      this.setState({board: board})
    }else{
      board[index] = "🌴"
      this.setState({board: board})
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square
                value={value} 
                index={index}
                handleGamePlay={this.handleGamePlay}
             />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
