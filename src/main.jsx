// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  // <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  // </React.StrictMode>
)
