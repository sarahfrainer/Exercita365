import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        lerUsuarios();
    }, []);

    function lerUsuarios() {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(dados => setUser(dados))
            .catch(erro => console.log(erro));
    }


    // const [userOnline, setUserOnline] = useState(0);

    // useEffect(() => {
    //     lerUsuarios();

    //     const mudançaStorage = () => {
    //         console.log('Mudança detectada');
    //         const isOnline = localStorage.getItem('isOnline');
    //         console.log('isOnline:', isOnline);
    //         if (isOnline === 'true') {
    //             setUserOnline((prevCount) => prevCount + 1);
    //         }
    //     };

    //     window.addEventListener('storage', handleStorageChange);

    //     return () => {
    //         window.removeEventListener('storage', handleStorageChange);
    //     };
    // }, []);


    async function buscarUsuario(email, senha) {
        try {
            const response = await fetch("http://localhost:3000/users");
            const dados = await response.json();

            let userVerific = false;

            dados.map(user => {
                debugger
                if (user.email == email) {
                    userVerific = true;

                    if (user.senha == senha) {
                        localStorage.setItem("isAutenticado", true)
                        localStorage.setItem("isOnline", true)

                        window.location.href = "/"
                        

                        return
                        // salvo id no localStorage
                        // salvo que ele está autenticado localStorage
                        // redireciona para o dashboard
                    }
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

    function deslog() {
        localStorage.removeItem("isAutenticado")
        window.location.href = "/login"
        localStorage.removeItem("isOnline")
    }

    async function lerUsuarioPorId(id) {
        fetch("http://localhost:3000/users/" + id)
            .then(response => response.json())
            .then(dados => setUser(dados))
            .catch(erro => console.log(erro))

    }

    function cadastrarUsuario(novoUsuario) {
        fetch("http://localhost:3000/users/", {
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
        <UserContext.Provider value={{ user, lerUsuarios, cadastrarUsuario, lerUsuarioPorId, buscarUsuario, deslog }}>
            {children}
        </UserContext.Provider>
    );
}