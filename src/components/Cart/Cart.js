import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd)=> total + prd.price ,0)

    let total = 0;
    for( let i = 0; i< cart.length; i++){
        let product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 1000){
        shipping = 0;
    }
    else if(total > 400){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order : {cart.length}</p>
            <p>Product Price : {total}</p>
            <p><small>Tax : {tax}</small></p>
            <p><small>Shipping : {shipping}</small></p>
            <p>Total Price : {total + shipping + tax}</p>
        </div>
    );
};

export default Cart;