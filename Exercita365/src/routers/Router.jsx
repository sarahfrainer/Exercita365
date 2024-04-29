import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CadastroEx from "../pages/CadastroEx";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Listagem from "../pages/Listagem";
import App from "../App"
import CadastroUs from "../pages/CadastroUs"


const Router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro-local-exercicio",
        element: <CadastroEx />
    },
    {
        path: "/lista-locais-exercicio",
        element: <Listagem />

    },
    {
        path: "/cadastro",
        element: <CadastroUs />

    }
        ]
    }
])

export default Router;