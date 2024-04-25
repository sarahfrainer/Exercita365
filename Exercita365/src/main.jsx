import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routers/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}>
    <App />
    </RouterProvider>
)
