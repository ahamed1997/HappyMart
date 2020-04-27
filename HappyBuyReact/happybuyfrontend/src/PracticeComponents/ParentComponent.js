import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChildrenComponent from './ChildrenComponent'

 class ParentComponent extends Component {
    constructor(props){  
        super(props)  
        this.state = {  
            searchItem:''
        } 
        this.greetParent = this.greetParent.bind(this);  
     }
    greetParent(e) {
        this.setState({[e.target.name]:e.target.value});  

    }
    render() {
        return (<Router>

            <div>
                <input type="text" name="searchItem" type="text"  value={this.state.searchItem} onChange={this.greetParent} placeholder="Search"/>


                <Link type="submit"  to={"/child/"+this.state.searchItem} >Search</Link>
               
                   
                    <Switch>                
                            <Route  path="/child/:searchItem" component={ChildrenComponent} />                                            
                    </Switch>
            </div>

        </Router>
            
        )
    }
}

export default ParentComponent
