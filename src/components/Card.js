import React from 'react';
import "./Card.css";
const Card = ({ name, id, description,bonus,levels,treasures }) => {
    //add state, since some cards differ
    return (
        <div className='Card tc'>
            <h3>{bonus}</h3>
            <div>
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
            <div className='Desc-Bottom'>
                <p>{levels}</p>
                <p>{treasures}</p>
            </div>
        </div>
    );
}
export default Card;