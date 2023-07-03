import React from 'react';
import "./Treasure.css";
const Treasure = ({ name, id, description, bonus }) => {
    return (
        <div className='Treasure tc'>
            <h3>{bonus}</h3>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Treasure;