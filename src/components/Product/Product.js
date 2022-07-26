import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-body'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className='main-btn' onClick={()=> props.handleAddProduct(props.product)}>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;