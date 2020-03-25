import React, { Component } from "react";

//There is no of class name and component should be the same.
class Welcoming extends Component
{
//De Structing of Props in class component.
//1.
//render(){
//     const { name , realname } = this.props
//    return <h1> Welcome {name} </h1>
// }
    render()
    {
    return <h1>Welcome {this.props.name} as </h1>
    }
}

export default Welcoming