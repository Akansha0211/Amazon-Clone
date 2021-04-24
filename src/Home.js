import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Beauty/GW/April/2021-SSD-Herotator-1500x600._CB670253033_.jpg" alt="home-img"></img>

                <div className="home__row">
                    {/* product component */}
                    <Product/>
                    <Product/>              
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row" >
                    {/* product component */}
                    {/* product component */}
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
