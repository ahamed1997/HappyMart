import React, { Component } from 'react'
import AuthService from './AuthService';
import { Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import './Suggestion.css';
import {  Link } from "react-router-dom";
import { InputGroup } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Suggestion extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            searchItem:"",
            suggestions:[],
            items:[],
        }
    }
    componentDidMount()
    {
        let key = [] ;
        AuthService.getAllProducts()
        .then(json=>{
            if( json.status === 200){ 
                this.setState(json.data)
                
                for( let i=0; i<json.data.length ; i++)
                {
                   key.push(json.data[i].productName);
                } 
                this.setState({items:key}) 
            }})
           
    }
    onTextChanged = (e)=>{
        e.preventDefault();
        const value = e.target.value;
        this.setState(()=>({searchItem:value}));
        let suggestions = [];
        if(value.length > 0){
            const regx = new RegExp(`^${value}`,'i');
            suggestions = this.state.items.sort().filter(v => regx.test(v));
        }
        this.setState(()=>({suggestions, searchItem:value}));
    }

    suggestionSelected(value)
    {
        this.setState(()=>({
            searchItem:value,
            suggestions:[],
        }))
    }

    renderSuggestion(e){
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item)=><li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    handleClick = (e) =>{
        console.log(this.state.searchItem)
        this.setState(()=>({
            suggestions:[],
        }))
    }
    render() {
        const {searchItem} = this.state;
        return (
            <div className="Suggestion">
                 <InputGroup>
                        <input style={{borderColor:"black", borderBlockColor:"none"}} value={searchItem}  onChange={this.onTextChanged} className="form-control"  name="searchItem" type="text" placeholder="Search" aria-label="Search" />
                            {this.renderSuggestion()}
                            {/* <Link  to={this.handleClick}type="button">Search</Link> */}
                        <Button size="large" href={"/searchProduct/"+this.state.searchItem} disabled={this.state.searchItem.length > 0  ? false : true}  icon={<SearchOutlined />}>Search</Button> 
                 </InputGroup>
                 
            </div>
        )
    }
}



