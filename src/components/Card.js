import React from 'react';
import "./Card.css";
const Card = ({ name, id, description,bonus }) => {
    return (
        <div className='Card tc'>
            <h3>{bonus}</h3>
            <div>
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
        </div>
    );
}
export default Card;