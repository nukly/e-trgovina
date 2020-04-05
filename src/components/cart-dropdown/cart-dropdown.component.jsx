import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDrowpdown = ({cartItems, history, dispatch }) => (
 <div className="cart-dropdown">
  <div className="cart-items">
   {
    cartItems.length ?
   (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)) 
   : (<span className="empty-message">Your cart is empty</span>)
   }
  </div>
  <CustomButton onClick={() => {
   history.push('/checkout');
   dispatch(toggleCartHidden())} 
 
 }>GO TO CHECKOUT</CustomButton>
 </div>
)

const mapStateToProps = createStructuredSelector (
{
 cartItems: selectCartItems
}
)



export default withRouter(connect(mapStateToProps)(CartDrowpdown))