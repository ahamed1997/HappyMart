import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Heeee"
        }
        // this.eventHandler = this.eventHandler.bind(this)
    }
    
    // eventHandler()
    // {
    //     this.setState({
    //         message:"Welcome"
    //     })
    // }
    eventHandler = ()=>{
        this.setState({
            message:"Welcome.."
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Binding in render */}
                {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
                {/* Binding with EventHandler */}
                {/* <button onClick={()=>this.eventHandler()}>Click</button> */}
                {/* Binding in Constructor */}
                {/* <button onClick={this.eventHandler}>Click</button> */}
                {/* Binding by using arrow function as class property */}
                <button onClick={this.eventHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
