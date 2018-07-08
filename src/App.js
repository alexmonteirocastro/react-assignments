import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './User/UserOutput.css'


class App extends Component {
  state = {
    userNames: [
      {userName: 'Alexandre'},
      {userName: 'Daniel'},
      {userName: 'Petr'}
    ]
  }

  userInputHandler = (event) => {
    this.setState({
      userNames: [
        {userName: event.target.value},
        {userName: 'Daniel'},
        {userName: 'Petr'}
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: '#cc6699',
      font: 'italic bold 12px/30px Georgia, serif',
      border: '6px dotted #A25B38',
      padding: '10px',
      cursor: 'alias'
    };

    return (
      <div className="App">
        <h1>My first React.js assignment</h1>
        <UserOutput userName={this.state.userNames[0].userName}/>
        <UserInput 
          changed={this.userInputHandler} 
          default={this.state.userNames[0].userName}
          style={style}/>
        <UserOutput userName={this.state.userNames[1].userName}/>
        <UserOutput userName={this.state.userNames[2].userName}/>
      </div>
    );
  }
}

export default App;
