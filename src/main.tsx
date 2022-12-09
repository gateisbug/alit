import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@src/styles/reset.scss';
import '@src/styles/index.scss';
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter basename={"/"/*process.env.PUBLIC*/}>
        <App />
    </HashRouter>
)