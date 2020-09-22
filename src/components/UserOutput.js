import React, { Component } from 'react';

class UserOutput extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let lengthText="Text is long"

        const style={
            fontWeight:''
        };

        if(this.props.length<=5){
            lengthText="Text is short"
            style.fontWeight='bold'
        }

        return(
            <div className='container'>
                <p style={style}>{lengthText}</p>
            </div>
        );
    };
}

export default UserOutput;