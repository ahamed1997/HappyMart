import React from 'react'
import Customer from './Customer'
import Courier from './Courier'
import Offers from './Offers'
import Products from './Products'
import Vendors from './Vendors'
import Sales from './Sales'
import Settings from './Settings'
import Stock from './Stock'
import Orders from './Orders'
import { Route } from "react-router-dom";

export const SubRoutes = () => {
    return (
        <div>
            <Route  path="/home/customer" component={Customer} />
            <Route  path="/home/order" component={Orders} />
            <Route  path="/home/courier" component={Courier} />
            <Route  path="/home/offer" component={Offers} />
            <Route  path="/home/product" component={Products} />
            <Route  path="/home/vendor" component={Vendors} />
            <Route  path="/home/stock" component={Stock} />
            <Route  path="/home/sales" component={Sales} />
            <Route  path="/home/settings" component={Settings} />
        </div>
    )
}
