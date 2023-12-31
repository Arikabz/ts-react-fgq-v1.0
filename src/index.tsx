import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const element = document.getElementById('root');

const elassert:HTMLElement = element!;

const root = ReactDOM.createRoot(elassert);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider 
                domain='dev-7fzxcbarf08zoaab.us.auth0.com'
                clientId='e1Lr5fXH5T4VrRoCEvg1CBHwRdSj0Qcs'
                redirectUri='http://localhost:3000/dashboard'>
                <App />
            </Auth0Provider >
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
