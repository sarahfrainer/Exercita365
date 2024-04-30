import { createContext, useState, useEffect } from "react";

export const LocaisContext = createContext()

export const LocaisContextProvider = ({children}) => {
    const [locais, setLocais] = useState ([]);

    useEffect(() => {
        lerLocais();
    }, []);

    function lerLocais() {
        fetch("http://localhost:3000/locais")
            .then(response => response.json())
            .then(dados => setLocais(dados))
            .catch(erro => console.log(erro));
    }

    function lerLocaisPorId(id){
      fetch("http://localhost:3000/locais/" + id)
      .then(response => response.json())
      .then(dados => setLocais(dados))
      .catch(erro => console.log(erro))
    }
  

    function cadastrarLocal(local) {
        fetch("http://localhost:3000/locais", {
            method: "POST", // cadastrar
            body: JSON.stringify(local),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                alert("Local adicionado com sucesso!");
                lerLocais();                
            })
            .catch(() => alert("Erro ao adicionar o local :("));

    } 

    function editarLocal(local, id){    
        fetch("http://localhost:3000/locais/" + id, {
          method: "PUT",
          body: JSON.stringify(local),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => { 
          alert("Local alterado com sucesso!")
          lerLocais()
        })
        .catch(() => alert("Erro ao alteral local :("))
      }

      function removerLocal(id){
        fetch("http://localhost:3000/locais/" + id, {
          method: "DELETE",
        })
        .then(() => { 
          alert("Local removido com sucesso!")
          lerLocais()
        })
        .catch(() => alert("Erro ao remover local :("))
      }

    return (
        <LocaisContext.Provider value={{lerLocais, locais, setLocais, cadastrarLocal, editarLocal, removerLocal, lerLocaisPorId}}>
            {children}
        </LocaisContext.Provider>
    )
} 