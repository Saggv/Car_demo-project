import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Detail from "../Component/Detail";
import Product from "../Component/Product";
import Collection from "../Component/Collection";
import Home from "../Component/Home";

function Routerss() {
  return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/detail/:slug.:id.html" component={Detail} />
        <Route path="/collection" component={Collection} />
      </div>
  );
}

export default Routerss;