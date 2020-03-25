import React, { Component } from 'react'

class ConditionalRendering extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          isLoggedIn : true
     }
 } 
 
    render() {
        //Instead of IF Conditional

        return this.state.isLoggedIn && <div>Welcome Hero!!</div>

        //Instead of IF ELSE Conditional
        
        return(
            this.state.isLoggedIn ?
            (
                <div>Welcome Hero!!!</div>
            ) :
            (
                <div>Who are you?</div>
            )
        )


        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Hero!!!</div>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Who are you man?
        //         </div>
        //     )
        // }
    }
}

export default ConditionalRendering
