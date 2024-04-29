import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { Link } from "react-router-dom";
import styles from "./Login.module.css"

export default function Login() {

    const {login} = useContext(UserContext);

    const [user, setUser] = useState({
        email: "",
        senha: ""
      })


    async function handleLogin() {
        await login(user.email, user.senha);
      }    
   

    return (
        <>
        <h1>Faça login</h1>
        <form onSubmit={handleLogin}>
//          <label htmlFor='email'>Email:</label>
//                 <input
                    type='email'
                    id='email'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    required
        /><br />
        <label htmlFor='senha'>Senha:</label>
            <input
                    type='password'
                    id='senha'
                    value={user.senha}
                    onChange={(e) => setUser({...user, senha: e.target.value})}
                    required
                /><br />
                <button type="submit">Login</button>
        </form>

        <Link to= "/" className= {styles.cadastro}>Cadastre-se</Link>
        </>
    )
}

//     const [usuario, setUsuario] = useState('');
//     const [senha, setSenha] = useState('');
//     const [erro, setErro] = useState('');
//     const history = useHistory();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const resposta = await fetch('http://localhost:3000/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ usuario, senha })
//             });

//             if (!resposta.ok) {
//                 throw new Error("Login falhou");
//             }

//             const resultado = await resposta.json();
//             console.log("Login funcionou:", resultado);
//             history.push('/dashboard');
            
//         } catch (error) {
//             console.error("Erro:", error.message);
//             setErro("Não foi possível realizar o login");
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             {erro && <p style={{ color: 'red' }}>{erro}</p>}
//             <form onSubmit={handleLogin}>
//                 <label htmlFor='usuario'>Usuário:</label>
//                 <input
//                     type='text'
//                     id='usuario'
//                     name='usuario'
//                     value={usuario}
//                     onChange={(e) => setUsuario(e.target.value)}
//                     required
//                 /><br />
//                 <label htmlFor='senha'>Senha:</label>
//                 <input
//                     type='password'
//                     id='senha'
//                     name='senha'
//                     value={senha}
//                     onChange={(e) => setSenha(e.target.value)}
//                     required
//                 /><br />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }