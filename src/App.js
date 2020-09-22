import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state={
    usertext:''
  }

  handleTextChange=(event)=>{
    this.setState({
      usertext:event.target.value
    })
  }

  deleteChar=(index)=>{
    const text=this.state.usertext.split('');
    text.splice(index,1);
    this.setState({
      usertext:text.join('')
    })
  }

  render() {


    let chars=this.state.usertext.split('').map((ch,index)=>{
      return <UserInput 
      char={ch} 
      key={index}
      clicked={()=>this.deleteChar(index)}/>
    });

    return (
      <div className="App">
        <input type="text"onChange={this.handleTextChange} value={this.state.usertext}></input><br/>
        {this.state.usertext}
        <UserOutput length={this.state.usertext.length}></UserOutput>
        {chars}
      </div>
    );
  }
}

export default App;
