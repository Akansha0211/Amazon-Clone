import React from 'react';
import  './Checkout.css'

function Checkout() {
    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS/1500x300_sanitizer.jpg" ></img>
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}

                </div>
            </div>
            <div className="checkout__right" >
                {/* subtotal component */}
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout;
