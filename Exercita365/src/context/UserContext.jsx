import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [ usuarios, setUsuario ] = useState([]);

    useEffect(() => {
        lerUsuarios()
    }, []);

    function lerUsuarios(){
        fetch("http://localhost:3000/users")
        .then (response => response.json())
        .then (dados => setUsuario(dados))
        .catch(erro => console.log(erro))
    }

    async function buscarUsuario (email, senha) {
        try {
            let listaUsuarios = await fetch ("http://localhost:3000/users");

            let userverific = false;

            listaUsuarios.map(user => {
                if(user.email == email){
                    userverific = true;
                }
                if(user.senha == senha) {
            // salvo id no localStorage
            // salvo que ele está autenticado localStorage
            // redireciona para o dashboard
                }
            })
           
        }
        catch {
            alert ("Usuário não cadastrado");
        }

        async function lerUsuarioPorId(id) {
            try {
                let resultado = await fetch ("http://localhost:3000/users" + id);
                return resultado.json()
            }
            catch {
                alert ("Não foi possível localizar usuário")
            }
        }}

        function cadastrarUsuario(novoUsuario) {
            fetch("http://localhost:3000/usuarios", {
                method: "POST", // cadastrar
                body: JSON.stringify(novoUsuario),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
            .then(() => {
              alert("Usuario adicionado com sucesso!")
                lerUsuarios()
              })
            .catch(() => alert("Erro ao adicionar o usuário!"))
            }

            return (
                <UsuariosContext.Provider value={{usuarios, cadastrarUsuario, lerUsuarioPorId, buscarUsuario}}>
                  {children}
                </UsuariosContext.Provider>)

        }


    
