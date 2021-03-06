import React, { Component } from 'react'
import FormInput from '../../components/form-input/FormInput'
import './SignIn.scss'
import CustomButton from '../../components/custom-button/CustomButton'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {
 constructor(props){
  super(props)

  this.state = {
   email: '',
   password: ''
  }
 }
 
 handleSubmit = async event => {
  event.preventDefault()

  const{email, password} = this.state

  try {
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({email:'', password: ''})
  } catch (error) {
    console.log(error)
    alert(error)
  }

  this.setState({email: '', password: ''})
 }
 handleChange = event => {
  const { value, name} = event.target 
  
  this.setState({[name]: value})
 }
 render() {
  return (
   <div className='sign-in'>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    
    <form onSubmit={this.handleSubmit}>
     <FormInput 
     type="email" 
     name="email" 
     value={this.state.email} 
     handleChange={this.handleChange}
     label="Email"
     required/>
     <FormInput 
     type="password" 
     name="password" 
     value={this.state.password} 
     handleChange={this.handleChange}
     label="Password"
     required/>

     <div className="buttons">
     <CustomButton to="/signin">SIGN IN</CustomButton>
     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
     </div>

     </form>
    
    </div>
  )
 }
}
