import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';

export default function Login() {

    const { cadastrarUsuario} = useContext(UserContext)

    const [novoUsuario, setNovoUsuario] = useState({
        nome: "",
        sexo: "",
        cpf: "",
        nascimento: "",
        email: "",
        senha: "",
        cep: "",
        numero: ""
    })



    return (
        <>
            <h1>Faça seu cadastro</h1>
            <label htmlFor="nome" id={styles.nome}>Nome completo:</label> <br />
            <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                value={novoUsuario.nome}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, nome: evento.target.value })}
            />
            <label htmlFor="sexo" id={styles.sexo}>Sexo:</label> <br />
            <select id="sexo"  onChange={(evento) => setNovoUsuario({ ...novoUsuario, sexo: evento.target.value })}>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="naoInformado">Prefiro não informar</option>
            </select>
            <label htmlFor="cpf" id={styles.cpf}>CPF:</label> <br />
            <input
                type="text"
                id="cpf"
                placeholder="Digite seu cpf"
                value={novoUsuario.cpf}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, cpf: evento.target.value })}
            />
            <label htmlFor="nascimento" id={styles.nascimento}>Data de nascimento:</label> <br />
            <input
                type="text"
                id="nascimento"
                placeholder="Digite seu cpf"
                value={novoUsuario.nascimento}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, nascimento: evento.target.value })}
            />
            <label htmlFor="email" id={styles.email}>E-mail:</label> <br />
            <input
                type="email"
                placeholder="Digite seu email"
                value={novoUsuario.email}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, email: evento.target.value })}
            />
            <input
                type="senha"
                placeholder="Digite sua senha"
                value={novoUsuario.senha}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, senha: evento.target.value })}
            />
            <label htmlFor="cep" id={styles.cep}>CEP:</label> <br />
            <input
                type="text"
                id="cep"
                placeholder="Digite seu cpf"
                value={novoUsuario.cep}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, cep: evento.target.value })}
            />
            <label htmlFor="numero" id={styles.numero}>Número da residência e complemento:</label> <br />
            <input
                type="text"
                id="numero"
                placeholder="Digite o número e o complemento"
                value={novoUsuario.numero}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, numero: evento.target.value })}
            />
            <button onClick={() => cadastrarUsuario(novoUsuario)}>Cadastrar</button>
            <hr />


        </>
    )
}