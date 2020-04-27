// import React from 'react';

// function ChildrenComponent(props) {
//     return (
//         <div>
//             <button onClick={()=>props.greetHandler('your child')}>Greet Parent</button> &nbsp;
//             <button onClick={()=>props.greetHandler('your relation')}>Greet Parent</button>
//         </div>
//     )
// }

// export default ChildrenComponent

// import React, { Component } from 'react'

// class ChildrenComponent extends Component {
//     constructor(props){  
//         super(props)  
//         this.state = {  
//             searchItem :'',
//             products:[]
//             }  
//     }  

//     componentDidMount(){
//         const{passSearchedItem}= this.props.location.state       
//         this.setState({searchItem:passSearchedItem})
//         console.log(this.state.searchItem)

//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.searchItem}</h1>
//                 Hello
//             </div>
//         )
//     }
// }



import React from "react";
const ChildrenComponent = (...match) => {
console.log(match[0].location.state.placeProduct.productId)
  
 
  return (<div>
      </div>);
}
export default ChildrenComponent;

// import React from 'react'

// function ChildrenComponent({match}) {

//   return (
//     <div>
//       <h1>{match.params.searchItem}</h1>
//     </div>
//   )
// }

// export default ChildrenComponent
