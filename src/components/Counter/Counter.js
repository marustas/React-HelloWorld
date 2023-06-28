import React, { useState } from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
    const [level, setLevel] = useState(1);
    const [gear, setGear] = useState(0);

    const handleLevelIncrement = () => {
        if (level < 10) {
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
        setGear(gear - 1);
    };

    const handleResetGear = () => {
        setGear(0);
    };

    const power = level + gear;

    return (
        <div>
                <div className='Inline'>
                    <div className='mr4'>
                    <h3>Power</h3>
                    <h1>{power}</h1>
                    </div>
                    <button className="Death" onClick={handleResetGear}>
                        <FontAwesomeIcon className='pa0 h2' icon={faSkull} />
                    </button>
                </div>
            <div>
            </div>
            <div className='BottomStats'>
                <div className='mr4'>
                    <h3>Level</h3>
                    <div>
                        <button className={level === 1 ? 'arrow-down-limit' : 'arrow-down'} onClick={handleLevelDecrement}></button>
                        <h1>{level}</h1>
                        <button className={level === 10 ? 'arrow-up-limit' : 'arrow-up'} onClick={handleLevelIncrement}></button>
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
