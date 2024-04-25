import { createContext, useState } from "react";

export const LocaisContext = createContext()

export const LocaisContextProvider = ({children}) => {
    const [locais, setLocais] = useState ([
        {
            ntrilha: "Trilha do macaco",
            cidadeEstado: "Florianópolis - SC",
            nusuario: "Sarah",
            duracao: "2 horas",
            trajeto: "6km",
            dificuldade: "intermediário",
            tipoDeTrilha: "Caminhada",
            imagemTrilha: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ])

    function adicionarLocal(locais) {
        setLocais((prevLocais) => [...prevLocais, {...locais, id: prevLocais.length + 1}]);
    }

    return (
        <TrilhasContext.Provider value={{adicionarLocal, locais, setLocais}}>
            {children}
        </TrilhasContext.Provider>
    )
} 