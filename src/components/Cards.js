import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Projects!</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
            <ul className="cards_items">
             <CardItem
             src="images/RoamForth.png"
             text="Explore the National Parks"
             label="RoamForth"
             path="/portfolio">
            />
            </CardItem>  
            </ul>
            </div>


            </div>

            
        </div>
    )
}

export default Cards
