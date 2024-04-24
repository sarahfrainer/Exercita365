import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState ([

        [
            {
                nome: "Kauê Pietro Cardoso",
                sexo: "masculino",
                cpf: "724.794.583-42",
                nascimento: "15/01/1982",
                email: "kauepietrocardoso@moncoes.com.br",
                senha: "zL0SJxw0lw",
                cep: "37004-300",
                endereco: "Rua Francisca Bernardes Nogueira",
                numero: "100"
            },
            {
                nome: "Vera Renata Ferreira",
                sexo: "feminino",
                cpf: "855.484.132-87",
                nascimento: "10/04/2006",
                email: "vera_ferreira@betti.com.br",
                senha: "4phi86OBgn",
                cep: "13098-613",
                endereco: "Rua Leopoldo Landin Júnior",
                numero: "300"
            },
            {
                nome: "Emanuelly Eduarda Galvão",
                sexo: "Feminino",
                cpf: "684.295.236-00",
                nascimento: "27/02/2003",
                email: "emanuellyeduardagalvao@predilectasorocaba.com.br",
                senha: "dh55UmxRLo",
                cep: "89050-340",
                endereco: "Rua Honduras",
                numero: "799"
            },
            {
                nome: "Gabriel Noah Costa",
                sexo: "Masculino",
                cpf: "830.404.119-77",
                nascimento: "13/02/1989",
                email: "gabriel.noah.costa@tedde.com.br",
                senha: "ozE6L5luih",
                cep: "76812-320",
                endereco: "Rua Walter Walterberg",
                numero: "297"
            },
            {
                nome: "Pedro Henrique Marcos Vinicius Santos",
                sexo: "Masculino",
                cpf: "659.346.052-40",
                nascimento: "25/03/1988",
                email: "pedro-santos70@ceuazul.ind.br",
                senha: "n9XCFEI9zW",
                cep: "44020-593",
                endereco: "Rua da Liberdade",
                numero: 534,
            }
        ]
        

    ])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}