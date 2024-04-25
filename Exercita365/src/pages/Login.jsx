import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario, senha })
            });

            if (!resposta.ok) {
                throw new Error("Login falhou");
            }

            const resultado = await resposta.json();
            console.log("Login funcionou:", resultado);
            history.push('/dashboard');
            
        } catch (error) {
            console.error("Usuário ou senha não cadastrado:", error.message);
            setErro("Usuário ou senha incorretos");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <form onSubmit={handleLogin}>
                <label htmlFor='usuario'>Usuário:</label>
                <input
                    type='text'
                    id='usuario'
                    name='usuario'
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                /><br />
                <label htmlFor='senha'>Senha:</label>
                <input
                    type='password'
                    id='senha'
                    name='senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}