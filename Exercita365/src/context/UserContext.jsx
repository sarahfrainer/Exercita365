import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        lerUsuarios();
    }, []);

    function lerUsuarios() {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(dados => setUsuario(dados))
            .catch(erro => console.log(erro));
    }

    async function buscarUsuario(email, senha) {
        try {
            const resposta = await fetch("http://localhost:3000/users");
            const listaUsuarios = await resposta.json();

            let userverific = false;

            listaUsuarios.forEach(user => {
                if (user.email === email && user.senha === senha) {
                    userverific = true;
                    // salvo id no localStorage
                    // salvo que ele está autenticado localStorage
                    // redireciona para o dashboard
                }
            });

            if (!userverific) {
                throw new Error("Usuário não cadastrado");
            }
        } catch (error) {
            alert(error.message);
        }

        async function lerUsuarioPorId(id) {
            try {
                let resultado = await fetch("http://localhost:3000/users/" + id);
                return resultado.json();
            } catch {
                alert("Não foi possível localizar usuário");
            }
        }

        function cadastrarUsuario(novoUsuario) {
            fetch("http://localhost:3000/usuarios", {
                method: "POST", // cadastrar
                body: JSON.stringify(novoUsuario),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(() => {
                    alert("Usuario adicionado com sucesso!");
                    lerUsuarios();
                })
                .catch(() => alert("Erro ao adicionar o usuário!"));
        }

        return (
            <UserContext.Provider value={{ usuarios, cadastrarUsuario, lerUsuarioPorId, buscarUsuario }}>
                {children}
            </UserContext.Provider>
        );
    }
};