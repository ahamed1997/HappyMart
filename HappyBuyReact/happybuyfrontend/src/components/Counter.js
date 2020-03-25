import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         count : 0    
        }
    }
    
    increament(){
        this.setState((prevState)=>({
            count: prevState.count+1
        }),()=>{
            console.log(this.state.count)
        })
        console.log(this.state.count)

    }
    decreament()
    {            
        if(this.state.count >0)
        {
            this.setState({
                count:this.state.count-1
            })
        }        
    }
    increamentByTen(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick={()=> this.increament()}>Increament</button><br/>
                <button onClick={()=> this.decreament()}>Decreament</button><br/>
                <button onClick={()=> this.increamentByTen()}>Increament 10</button>
            </div>
        )
    }
}

export default Counter
