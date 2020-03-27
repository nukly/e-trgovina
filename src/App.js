import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import HatsPage from './pages/hats/hats.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';
import './pages/homepage/homepage.styles.scss'

function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}></Route>
    <Route path='/shop/hats' component={HatsPage}></Route>
    <Route path='/shop/jackets' component={HatsPage}></Route>
    <Route path='/shop/sneakers' component={HatsPage}></Route>
    <Route path='/shop/womens' component={HatsPage}></Route>
    <Route path='/shop/mens' component={HatsPage}></Route>

    </Switch>
   
    </div>
  );
}

export default App;
