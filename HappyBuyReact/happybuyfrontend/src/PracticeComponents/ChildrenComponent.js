import React from 'react';

function ChildrenComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('your child')}>Greet Parent</button> &nbsp;
            <button onClick={()=>props.greetHandler('your relation')}>Greet Parent</button>
        </div>
    )
}

export default ChildrenComponent

