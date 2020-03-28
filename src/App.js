import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import './App.css';
import './pages/homepage/homepage.styles.scss'

import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
      <Header></Header>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInAndSignUpPage}></Route>
  
      </Switch>
     
      </div>
    );
  }
  
}

export default App;
