import React, { Component } from "react";

//There is no of class name and component should be the same.
class Message extends Component
{
     constructor()
    {
        super()
        this.state= {
            message : "I am Healthy!"
        }
    }
    changeMessage() {
        this.setState({
            message : "Dead"
        })
    }

    render()
    {
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button  onClick={()=> this.changeMessage()}>Spread Corona</button>
        </div>
    ) 
    }
}

export default Message