import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter, } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { initMiddleware, } from "devise-axios";

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
document.getElementById('root')
);

