import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

export default function Navbar () {

    const {deslog} = useContext(UserContext);

    return (

        <nav className="Navbar">
            <Link to= "/" className= "GuiaDashboard">Página inicial</Link>
            <Link to= "/login" className= "GuiaLogin">Login</Link>
            <Link to= "/cadastro-local-exercicio" className= "GuiaCadastro">Cadastre novos locais</Link>
            <Link to= "/lista-locais-exercicio" className= "GuiaLocais">Lista de locais</Link>
            <button onClick={() => deslog()}>Sair</button>
        </nav>
    )
}