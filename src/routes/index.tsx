import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Delivery from '../pages/Delivery';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/delivery" component={Delivery} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
