import React from 'react';

// function Greeting(props)
// {
//     Greetings(props);
// return <h1>Hello {props.name}</h1>
// }
// function Greetings(props)
// {
// return <h1>Hello 2 {props.name}</h1>
// }

//De Structing of Props in Functional components.
//1.
//const Greet = (name,realname) => 
//2.
//const Greet = props => {
//     const { name , realname } = props
// }
//Normal
const Greet = props=> 
{
return (
        <div>
            <h1>
                Hello {props.name} and really it is a {props.realname}
            </h1>
            {/* {props.children} */}
        </div>
    )
}

//  export const Greet = () => <h1>Hello World!</h1>
export default  Greet