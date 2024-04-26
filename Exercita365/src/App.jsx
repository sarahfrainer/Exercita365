import './App.css';
import {Outlet} from "react-router-dom";
import React from 'react';
import { UserContextProvider } from "./context/UserContext.jsx"

function App() {
  return (
    <UserContextProvider>

<Outlet />

</UserContextProvider>
)  
}


export default App
