import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { HashRouter } from "react-router-dom"
import App from "./pages/App"
import './index.css';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))