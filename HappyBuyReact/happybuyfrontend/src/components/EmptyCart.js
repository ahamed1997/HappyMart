import React from 'react'
import './EmptyCart.css';
function EmptyCart() {
    return (
        <div>
            <div className="emptyCartImage">  
                  <div className="emptyCartImage"><img alt="" src={ require('../images/gif4.gif')} />
                  
                  </div>  
                  <b>Sorry mate.. No Items Found! </b>
                  <a href="/home"><b><i>Click here</i></b></a> <b>to continue Shopping</b>
                  
            </div>
        </div>
    )
}

export default EmptyCart
