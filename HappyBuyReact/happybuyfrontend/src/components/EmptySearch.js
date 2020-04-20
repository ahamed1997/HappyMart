import React from 'react'
import './EmptySearch.css';
import { Tooltip } from '@material-ui/core';

function EmptySearch() {
    return (
        <div>
             <div className="emptySearchImage">  
                  <div className="emptySearchImage"><img className="text-center" style={{width:'700px'}} src={ require('../images/gif5.gif')} />
                  
                  </div>  
                  <b>Sorry mate.. No Such Product! </b>
                  <a href="/home"><b><i>Click here</i></b></a> <b>to continue Shopping</b>
                  
            </div>
        </div>
    )
}

export default EmptySearch
