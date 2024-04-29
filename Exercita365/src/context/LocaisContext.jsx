import { createContext, useState, useEffect } from "react";

export const LocaisContext = createContext()

export const LocaisContextProvider = ({children}) => {
    const [locais, setLocais] = useState ([]);

    useEffect(() => {
        lerLocais();
    }, []);

    function lerLocais() {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(dados => setUser(dados))
            .catch(erro => console.log(erro));
    }


    function adicionarLocal(local) {
        setLocais((prevLocais) => [...prevLocais, {...local, id: prevLocais.length + 1}]);
    }

    return (
        <LocaisContext.Provider value={{adicionarLocal, locais, setLocais}}>
            {children}
        </LocaisContext.Provider>
    )
} 