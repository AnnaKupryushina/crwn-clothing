import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J3PDQAbVcVA0D7NMsq3O4yOLSPvkKFfKQxjnd6C3dXQiiPIugMkH7U2VafFUc9CMaykz9cxOr3MwJ9atMOUEx4L00zJNwBDzSselectCollectionsForPreview'

const onToken= token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} 
        />
    );
};

export default StripeCheckoutButton;

