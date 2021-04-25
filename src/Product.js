import React from 'react';
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is the basket >>>", basket);
    const addToBasket = ()=>{
        //dispatch some action itn the datalayer (item itno the datalayer)
        dispatch ({
            type :'ADD_TO_BASKET',
            item :{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon/>
                    ))}
                </div>       
            </div>
            <img src={image}></img>
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
