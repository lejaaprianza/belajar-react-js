import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome visitors'
        }
    }
    changeMessage(){
        this.setState(
            {
                message:'WKWKWK'
            }
        )
    }
    render(){
        return (
          <div>

        <h1>
            {this.state.message} 
            </h1>
            <button onClick={()=>this.changeMessage()}>Tekan</button>
        </div>
            
        )
        
    }
}

export default Message
