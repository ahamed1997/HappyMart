import React, { Component } from 'react'

class ClassEventHandler extends Component {
    eventHandler()
    {
        console.log("Class Click")
    }
    render() {
        return (
            <div>
                <button onClick={this.eventHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassEventHandler

