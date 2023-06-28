import React, { useState } from 'react';
import './Counter.css'
const Counter = () => {
    const [level, setLevel] = useState(1);
    const [gear, setGear] = useState(0);

    const handleLevelIncrement = () => {
        if(level < 10){
            setLevel(level + 1);
        }
    };

    const handleLevelDecrement = () => {
        if (level > 1) {
            setLevel(level - 1);
        }
    };

    const handleGearIncrement = () => {
        setGear(gear + 1);
    };

    const handleGearDecrement = () => {
        if (gear > 0) {
            setGear(gear - 1);
        }
    };

    const power = level + gear;

    return (
        <div>
            <div>
                <h3>Power</h3>
                <h1>{power}</h1>
            </div>
            <div className='BottomStats'>
            <div className='mr4'>
                <h3>Level</h3>
                <div>
                <button className='arrow-down' onClick={handleLevelDecrement}></button>
                <h1>{level}</h1>
                <button className='arrow-up' onClick={handleLevelIncrement}></button>
                </div>
            </div>
            <div className='di ml4'>
                <h3>Gear</h3>
                <button className='arrow-down' onClick={handleGearDecrement}></button>
                <h1>{gear}</h1>
                <button className='arrow-up' onClick={handleGearIncrement}></button>
            </div>
            </div>
        </div>
    );
};

export default Counter;
