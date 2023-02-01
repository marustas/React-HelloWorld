import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList'
import { robots } from './robot';
import reportWebVitals from './reportWebVitals';
import 'tachyons'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    <CardList robots ={robots}/>
    </React.StrictMode>
);

reportWebVitals();