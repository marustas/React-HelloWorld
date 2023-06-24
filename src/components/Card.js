import React from 'react';
import "./Card.css";
const Card = ({ name, id, description, bonus, bad, power }) => {
    //add state, since some cards differ
    return (
        <div className='Card tc'>
            <h3>{bonus}</h3>
            <div>
                <p>{power}</p>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <p>{bad}</p>
        </div>
    );
}
export default Card;