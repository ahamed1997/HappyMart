import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greet:"Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childParam){
        alert(`Hello ${this.state.greet} from ${childParam}`)
    }
    render() {
        return (
            <div>
                <ChildrenComponent greetHandler ={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
