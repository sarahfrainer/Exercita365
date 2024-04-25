import { createContext, useState } from "react";

export const LocaisContext = createContext()

export const LocaisContextProvider = ({children}) => {
    const [locais, setLocais] = useState ([
        {
            nlocal: "Trilha do macaco",
            idusuario: "1234",
            descrição: "Lindo lugar para fazer trilhas",
            cep: "https://viacep.com.br/ws/88215000/json/",
            coordenadas: "-27.17790080045851, -48.499666977182656",
            tipoesporte: "trilha"
        },
        {
            nlocal: "Praia do rosa",
            idusuario: "1234",
            descrição: "Belo mar, ondas calmas, perfeito para natação ao ar livre",
            cep: "https://viacep.com.br/ws/88780-000/json/",
            coordenadas: "-28.093553838175584, -48.63090678458072",
            tipoesporte: "natação"
        },
        {
            nlocal: "Beira-mar norte",
            idusuario: "1234",
            descrição: "Ótimo lugar para caminhadas e outros esportes",
            cep: "https://viacep.com.br/ws/88015-702/json/",
            coordenadas: "-27.56190094605664, -48.54074909040275",
            tipoesporte: "caminhada"
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