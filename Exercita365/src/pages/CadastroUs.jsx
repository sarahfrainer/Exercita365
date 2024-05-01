import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import styles from "./CadastroUs.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Cadastro() {

    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { cadastrarUsuario } = useContext(UserContext)

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

    function onSubmit(formValue) {
        cadastrarUsuario(formValue);
        reset();

    }

    return (
        <>
            <form className={styles.formulario} onSubmit={handleSubmit((onSubmit))}>
                <h1>Faça seu cadastro</h1>

                <div>
                    <label htmlFor="nome" id={styles.nome}>Nome completo:</label> <br />
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome completo"
                        {...register("nome", {
                            required: "Por favor, insira o seu nome",
                            maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, nome: evento.target.value })}
                    />
                     {errors.nome && <p>{errors.nome.message}</p>}
                      <br />
                </div>

                <div>
                    <label htmlFor="sexo" id={styles.sexo}>Sexo:</label> <br />
                    <select id="sexo"
                        {...register("sexo", {
                            required: "Por favor, selecione o sexo",
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, sexo: evento.target.value })}>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="naoInformado">Prefiro não informar</option>
                    </select> 
                    {errors.sexo && <p>{errors.sexo.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="cpf" id={styles.cpf}>CPF:</label> <br />
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Digite seu cpf"
                        {...register("cpf", { 
                            required: "Por favor, insira o seu cpf",
                                maxLength: {
                                value: 11,
                                message: "Máximo de 11 caracteres permitido" },
                                minLength: {
                                    value: 11,
                                    message: "Minimo de 11 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, cpf: evento.target.value })}
                    />
                    {errors.cpf && <p>{errors.cpf.message}</p>}
                     <br />
                </div>

                <div>
                    <label htmlFor="nascimento" id={styles.nascimento}>Data de nascimento:</label> <br />
                    <input
                        type="text"
                        id="nascimento"
                        placeholder="Digite sua data de nascimento"
                        {...register("nascimento", { 
                            required: "Por favor, insira sua data de nascimento",
                                maxLength: {
                                value: 20,
                                message: "Máximo de 20 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, nascimento: evento.target.value })}
                    /> 
                    {errors.nascimento && <p>{errors.nascimento.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="email" id={styles.email}>E-mail:</label> <br />
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email", { 
                            required: "Por favor, insira o seu email",
                                maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, email: evento.target.value })}
                    /> 
                     {errors.email && <p>{errors.email.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="senha" id={styles.senha}>Senha:</label> <br />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("senha", { 
                            required: "Por favor, insira a sua senha",
                                maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, senha: evento.target.value })}
                    /> 
                     {errors.senha && <p>{errors.senha.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="cep" id={styles.cep}>CEP:</label> <br />
                    <input
                        type="text"
                        id="cep"
                        placeholder="Digite seu CEP"
                        {...register("cep", { 
                            required: "Por favor, insira o seu CEP",
                                maxLength: {
                                value: 8,
                                message: "Máximo de 8 caracteres permitido" },
                                minLength: {
                                    value: 8,
                                    message: "Minimo de 8 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, cep: evento.target.value })}
                    /> 
                     {errors.cep && <p>{errors.cep.message}</p>}
                    <br />
                </div>

                <div>
                <label htmlFor="logradouro" id={styles.logradouro1}>Logradouro:</label> <br />
                <input type="text" className={styles.logradouro2} id={styles.logradouro2} placeholder="digite o logradouro" 
                {...register("logradouro")}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, logradouro: evento.target.value })}
                 /><br />
                
                </div>

                <div>
                <label htmlFor="bairro" id={styles.bairro1}>Bairro:</label> <br />
                <input type="text" className={styles.bairro2} id={styles.bairro2} placeholder="digite o bairro" 
                {...register("bairro")} 
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, bairro: evento.target.value })}
                /> <br />
                </div>

                <div>
                <label htmlFor="localidade" id={styles.localidade1}>Localidade:</label> <br />
                <input type="text" className={styles.localidade2} id={styles.localidade2} placeholder="digite a localidade" 
                {...register("localidade")}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, localidade: evento.target.value })}
                 /> <br />
                </div>

                <div>
                <label htmlFor="estado" id={styles.estado1}>Estado:</label> <br />
                <input type="text" className={styles.estado2} id={styles.estado2} placeholder="digite o estado" 
                {...register("estado")} 
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, estado: evento.target.value })}
                /><br />
                </div>

                <div>
                    <label htmlFor="numero" id={styles.numero}>Número da residência e complemento:</label> <br />
                    <input
                        type="text"
                        id="numero"
                        placeholder="Digite o número e o complemento"
                        {...register("numero", { 
                            required: "Por favor, insira o número e seu complemento",
                                maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido" }})}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, numero: evento.target.value })}
                    /> 
                     {errors.numero && <p>{errors.numero.message}</p>}
                    <br />
                </div>

                <button type="submit">Cadastrar</button>
                <hr />
            </form>

        <Link to= "/Login" className= {styles.login}>Login</Link>

        </>
    )
}