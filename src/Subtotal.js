import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>(
                <>
                    <p>
                        Subtotal ( <strong>{basket.length}</strong> items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )} 
                decimalScale ={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

// Build the subtotal to show the number of items and sum the total price of the products
