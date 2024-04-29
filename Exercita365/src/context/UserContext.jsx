import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        lerUsuarios();
    }, []);

    function lerUsuarios() {
        fetch("http://localhost:3000/users")
            .then(resposta => resposta.json())
            .then(listaUsuarios => setUsuario(listaUsuarios))
            .catch(erro => console.log(erro));
    }

    async function buscarUsuario(email, senha) {
        try {
            const resposta = await fetch("http://localhost:3000/users");
            const listaUsuarios = await resposta.json();

            let userVerific = false;

            listaUsuarios.forEach(user => {
                if (user.email == email) {
                    userVerific = true;
                }
                if (user.senha == senha) {
                    localStorage.setItem("isAutenticado", true)
                    window.location.href = "/"
                    return
                    // salvo id no localStorage
                    // salvo que ele está autenticado localStorage
                    // redireciona para o dashboard
                }
                else {
                    alert("Senha incorreta!");
                    return;
                }
            });


            if (!userVerific) {
                alert("Esse e-mail não está cadastrado!")
            }
        }
        catch {

        }
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
        <UserContext.Provider value={{ usuarios, lerUsuarios, cadastrarUsuario, lerUsuarioPorId, buscarUsuario }}>
            {children}
        </UserContext.Provider>
    );
}