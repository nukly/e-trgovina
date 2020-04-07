import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
 const priceForStripe = price * 100
 const publishableKey = 'pk_test_hW5PZj5kPVWehHyfZuOxd19G00T90QhL0F'

 const onToken = token =>{
  console.log(token)
  alert('Payment Successful')
 }

 return(
  <StripeCheckout
   label='Pay Now'
   name='E-shop'
   billingAddress
   shippingAddress
   image='https://svgshare.com/i/CUz.svg'
   description={`Your total is ${price} €`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
  >

  </StripeCheckout>
 )
}

export default StripeCheckoutButton