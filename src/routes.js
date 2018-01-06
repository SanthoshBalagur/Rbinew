import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Shipping from './components/Shipping';
import Products from './components/Products';
import InternalDispatch from './components/InternalDispatch';
import ProductDetail from './components/ProductDetail';
import CreateNewOrder from './components/CreateNewOrder';
import CreateOrder from './components/CreateOrder';
import EditOrder from './components/EditOrder';
import CreateInternalDispatch from './components/CreateInternalDispatch';
import EditInternalDispatch from './components/EditInternalDispatch';
import ReceivedOrder from './components/ReceivedOrder';
import ReceivedInternalDispatch from './components/ReceivedInternalDispatch';


const Routes = () => (
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route path="/home" component={Dashboard} />
    {/* <Route path="/dashboard" component={Dashboard} /> */}
    <Route path="/products" component={Products} />
    <Route path="/createOrder" component={CreateOrder} />
    <Route path="/receivedOrder" component={ReceivedOrder} />
    <Route path="/receivedInternalDispatch" component={ReceivedInternalDispatch} />
    <Route path="/editOrder" component={EditOrder} />
    <Route path="/shipping" component={Shipping} />
    <Route path="/internal" component={InternalDispatch} />
    <Route path="/createInternalDispatch" component={CreateInternalDispatch} />
    <Route path="/editInternalDispatch" component={EditInternalDispatch} />
    <Route path="/productdetail" component={ProductDetail} />
    <Route path="/createNewOrder" component={CreateNewOrder} />
  </div>
);

export default Routes;
