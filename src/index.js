// import ReactDom from 'react-dom'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import React from 'react';

import { AppProvider } from './Components/useContext';


// ReactDom.render(<App/>, document.querySelector('#root'));


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <AppProvider>
        <App/>
    </AppProvider>
    
)