import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';

export default function Login() {

    const {usuarios, cadastrarUsuario, lerUsuarioPorId, buscarUsuario} = useContext (UserContext)

    const [novoUsuario, setNovoUsuario] = useState ({
        nome: "",
        sexo: "",
        cpf: "",
        nascimento: "",
        email: "",
        senha: "",
        cep: "",
        numero: ""
    })

    const handleLogin = async (e) => {
       e.preventDefault();
       try {
        await buscarUsuario(novoUsuario.email, novoUsuario.senha);
       
    } catch (error) {
        console.error("Erro:", error.message);
        // Handle login error, display message to user
    }
};
   


    return (
        <>
        <h1>Faça login</h1>
        <form onSubmit={handleLogin}>
//          <label htmlFor='email'>Email:</label>
//                 <input
                    type='email'
                    id='email'
                    name='email'
                    value={user.email}
                    required
        /><br />
        <label htmlFor='senha'>Senha:</label>
            <input
                    type='password'
                    id='senha'
                    name='senha'
                    value={user.senha}
                    required
                /><br />
                <button type="submit">Login</button>
        </form>

        
        </>
    )
}