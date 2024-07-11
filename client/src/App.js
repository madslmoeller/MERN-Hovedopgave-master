import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Menu
import Statistics from './Components/Menu/Statistics';
import Home from './Components/Menu/Home';
import NavBar from './Components/Menu/NavBar';
import LowerNavBar from './Components/Menu/LowerNavBar';

//LowerNavBar
import Orders from './Components/LowerNavBar/Orders';
import OrderLines from './Components/LowerNavBar/OrderLines';
import OrderLinelists from './Components/LowerNavBar/OrderLineLists';
import Products from './Components/LowerNavBar/Products';
import Users from './Components/LowerNavBar/Users';

//Statistics
import Bar from './Components/Statistics/Bar';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/items' component={LowerNavBar} />
          <Route path='/orders' component={Orders} />
          <Route path='/orderlines' component={OrderLines} />
          <Route path='/orderlinelists' component={OrderLinelists} />
          <Route path='/products' component={Products} />
          <Route path='/users' component={Users} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/bar' component={Bar} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

