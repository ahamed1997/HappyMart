





  import React, { Component } from 'react'
import './style.css';
class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'React'
        }
    }
    usernameHadler = event =>{
        this.setState({
            username : event.target.value
        })
    }
    commentsHandler = event =>{
        this.setState({
            comments:event.target.value
        })
    }
    topicsHandler = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    formHandler = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.formHandler}>
                <div>
                    <h1>LOGIN</h1>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.usernameHadler}
                    />
                    <br/>
                    
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.commentsHandler}
                    />
                    <br/>
                    <label>Topics</label>
                    <select 
                        value={this.state.topic} 
                        onChange={this.topicsHandler}>
                        <option 
                            value="React">React
                        </option>
                        <option 
                            value="Angular">Angular
                        </option>
                        <option 
                            value="Vue">Vue
                        </option>
                    </select>
                    <br/>
                    <button type="submit">Submit</button>
                </div>            
            </form>
            
        )
    }
}

export default LogIn
