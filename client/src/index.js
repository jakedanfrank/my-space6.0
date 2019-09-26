import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter, } from "react-router-dom";
import { initMiddleware, } from "devise-axios";
import "semantic-ui-css/semantic.min.css";

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
document.getElementById('root')
);

