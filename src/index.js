import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
    // here starts the App module with router
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));