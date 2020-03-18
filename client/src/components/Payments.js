import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';

class Payments extends Component {
    debugger;

    render () {
        console.log(process.env)
        return (
            <StripeCheckout
                amount={5}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
             />
        )
    }
}

export default Payments;