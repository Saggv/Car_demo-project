import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarvigation from './Component/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Routerss from "./Router/Router";
import {Provider} from "react-redux";
import Store from './Store';
import Foodter from './Component/Foodter';

function App() {
  return (
    <Provider store={Store}>
    <Router>
    <div className="App">
        <Navbarvigation></Navbarvigation>
        <Routerss></Routerss>
        <Foodter></Foodter>
    </div>
     </Router>
    </Provider>
  );
}

export default App;
