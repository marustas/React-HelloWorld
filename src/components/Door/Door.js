import React from 'react';
import "./Door.css";
const Card = ({ name, id, description, level, bad }) => {
    return (
        <div className='Door tc'>
            <h3>{level}</h3>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <p>{bad}</p>
        </div>
    );
}
export default Card;