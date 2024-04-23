import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="Navbar">
            <Link to= "/" className= "GuiaDashboard">Página inicial</Link>
            <Link to= "/login" className= "GuiaLogin">Login</Link>
            <Link to= "/cadastro-local-exercicio" className= "GuiaCadastro">Cadastre novos locais</Link>
            <Link to= "/lista-locais-exercicio" className= "GuiaLocais">Lista de locais</Link>
        </nav>
    )
}