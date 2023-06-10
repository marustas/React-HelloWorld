import React from 'react';
import "./Card.css";
const Card = ({ name, id, description }) => {
    return (
        <div className='Card dib shadow-5 grow'>
            <div className='CardInside'>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;