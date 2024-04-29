import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import CadastroEx from "../pages/CadastroEx";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Listagem from "../pages/Listagem";
import App from "../App"
import CadastroUs from "../pages/CadastroUs"

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false;

const PrivateRoute = ({children}) => {
    return isAutenticado ? children : <Navigate to="/login" />
}

const Router = createBrowserRouter ([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <CadastroUs />

    },
    {
        path: "/",
        element: (
        <PrivateRoute>
        <App />
        </PrivateRoute>),
        children: [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/cadastro-local-exercicio",
        element: <CadastroEx />
    },
    {
        path: "/lista-locais-exercicio",
        element: <Listagem />
    }
        ]
    }
])

export default Router;