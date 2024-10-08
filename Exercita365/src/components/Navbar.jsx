import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import styles from "./Navbar.module.css"

export default function Navbar () {

    const {deslog} = useContext(UserContext);

    return (

        <nav className={styles.Navbar}>
            <Link to= "/" className={styles.GuiaDashboard}>Página inicial</Link>
            <Link to= "/cadastro-local-exercicio" className={styles.GuiaCadastro}>Cadastre novos locais</Link>
            <Link to= "/lista-locais-exercicio" className={styles.GuiaLocais}>Lista de locais</Link>
            <div className={styles.Sair} onClick={() => deslog()}>Sair</div>
        </nav>
    )
}