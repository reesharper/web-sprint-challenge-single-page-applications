import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import Order from "./Order"

export default function App(props) {

return (
<div>

  <div>
  <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/4016/production/_112360461_gettyimages-1083704790.jpg" alt=""/>
  <br />
  <Link to="/">Home</Link>
  <br />
  <Link to="/order">Order</Link>
  </div>

  <Switch>
    <Route path="/order">
      <Order />
    </Route>
  </Switch>

  </div>
);

}