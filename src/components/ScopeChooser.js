import React from 'react';
import "./ScopeChooser.css";
const ScopeChooser = ({onScopeChange}) => {
    //add state, since some cards differ
    return (
        <div>
<button className='Btn' onClick={() => onScopeChange('doors')}>Doors</button>
<button className='Btn' onClick={() => onScopeChange('treasures')}>Treasures</button>
        </div>
    );
}
export default ScopeChooser;