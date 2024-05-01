import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { Link } from "react-router-dom";
import styles from "./Login.module.css"

export default function Login() {

    const {buscarUsuario} = useContext(UserContext);

    const [user, setUser] = useState({
        email: "",
        senha: ""
      })


    async function handleLogin() {
        await buscarUsuario (user.email, user.senha);
      }    
   

    return (
        <div className={styles.container}>
        <h1 className={styles.titulo1}>Faça login,</h1>
        <h2 className={styles.titulo2}>descubra lugares incríveis</h2>
        <form className={styles.form}>
          <label htmlFor='email' className={styles.email}>Email: <br /></label>
                 <input
                    type='email'
                    id='email'
                    className={styles.email}
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    required
                    placeholder='digite seu e-mail'
        /><br />
        <label htmlFor='senha' className={styles.senha}>Senha: <br /></label>
            <input
                    type='password'
                    id='senha'
                    className={styles.senha}
                    value={user.senha}
                    onChange={(e) => setUser({...user, senha: e.target.value})}
                    required
                    placeholder='digite sua senha'
                /><br />
                <button onClick={() => handleLogin()} className={styles.login}>Login</button>
        </form>

        <p className={styles.paragrafo}>Não tem uma conta?</p>
        <Link to= "/cadastro" className= {styles.cadastro}>Cadastre-se</Link>
        </div>
    )}