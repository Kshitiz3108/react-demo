import React, { Component } from 'react';
import './userInput.css';
import Radium from 'radium';

class UserInput extends Component{

    render(){

        let char=this.props.char;

        const style={
            ':hover':{
                backgroundColor:'yellow'
            }
        }

        let showchar="char-const"

        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            showchar="char-vowel"
            style[':hover']={
                backgroundColor:'green'
            }
        }
        return(
            <div className={showchar} style={style} onClick={this.props.clicked}>
                <p>{this.props.char}</p>
            </div>
        );
    }
}

export default Radium(UserInput)