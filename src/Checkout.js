import React from 'react';
import  './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user },dispatch]= useStateValue();
    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS/1500x300_sanitizer.jpg" ></img>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>

                    {/* CheckoutProduct */}
                    

                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    

                </div>
            </div>
            <div className="checkout__right" >
                {/* subtotal component */}
                <Subtotal/>
                {/* <h2>The subtotal will go here</h2> */}
            </div>
        </div>
    )
}

export default Checkout;
