import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Router from './ui/Router.jsx'
import "./assets/styles/global.css"






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
)
