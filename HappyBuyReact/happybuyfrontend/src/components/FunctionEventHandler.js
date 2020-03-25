import React from 'react'

function eventHandler()
{
    console.log("Button Clicked")
}
function FunctionEventHandler() {
    return (
        <div>
            <button onClick={eventHandler}>Fucntion Click</button>
        </div>
    )
}

export default FunctionEventHandler
