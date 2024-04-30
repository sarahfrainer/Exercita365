import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routers/Router.jsx';
import { UserContextProvider } from "./context/UserContext.jsx"
import { LocaisContextProvider } from './context/LocaisContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <LocaisContextProvider>
  <RouterProvider router={Router}>
    <App />
   </RouterProvider>
   </LocaisContextProvider>
   </UserContextProvider>
)
