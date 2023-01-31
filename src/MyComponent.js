import React from 'react';
import './MyCSS.css';
let MyComponent =(props)=>{
        return(
        <div> 
            <h1>Hello World </h1>
            <p>{props.greeting1}</p>
            <p>{props.greeting2}</p>
        </div>
        )
}

export default MyComponent;