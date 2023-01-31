import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render( <React.StrictMode >
          <MyComponent greeting1 ={'Hello, ' + 'ReactBaby'} greeting2 ={'and ' + 'ReactNinja'}/>
            <App/>
            </React.StrictMode>
        );

reportWebVitals();