import React from 'react';
import "./Card.css";
const Card = ({ name, id, email }) => {
    return (
        <div className='Card dib shadow-5 grow'>
            <div className='CardInside'>
                <div>
                    <h2>{name}</h2>
                    <img alt='Card' src={`template.jpg`} />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;