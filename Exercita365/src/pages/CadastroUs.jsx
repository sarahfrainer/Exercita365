import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import styles from "./CadastroUs.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Cadastro() {

    const { register,
        handleSubmit,
        formState: { errors },
        setValue, 
        getValues,
        reset
    } = useForm();

    const { cadastrarUsuario, lerUsuarios } = useContext(UserContext)

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
        fetch(`http://localhost:3000/users`)
            .then(response => response.json())
            .then(users => {
                const isDuplicate = users.some(user => {
                    return (
                        user.cpf === formValue.cpf
                    );
                });
    
                if (!isDuplicate) {
                    cadastrarUsuario(formValue);
                    reset();
                } else {
                    alert("Esse cpf já está cadastrado!");
                }
            })
            .catch(error => console.error("Erro:", error));}

    
    const buscarCep = () => {
        debugger
        let cep = getValues('cep')

        if (!!cep && cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => res.json())
                .then(dados => {
                    debugger
                    setValue('bairro', dados.bairro)
                    setValue('logradouro', dados.logradouro)
                    setValue('estado', dados.uf)
                    setValue('localidade', dados.localidade)
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className={styles.container} >
            <form className={styles.formulario} onSubmit={handleSubmit((onSubmit))}>
                <h1 className={styles.titulo}>Faça seu cadastro</h1>

                <div className={styles.form}>
                    <div>
                    <label htmlFor="nome" className={styles.nome}>Nome completo:</label> <br />
                    <input
                        type="text"
                        id={styles.nome}
                        className={styles.nome}
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
                    <label htmlFor="sexo" className={styles.sexo}>Sexo:</label> <br />
                    <select id={styles.sexo}
                        className={styles.sexo}
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
                    <label htmlFor="cpf" className={styles.cpf}>CPF:</label> <br />
                    <input
                        type="text"
                        id={styles.cpf}
                        className={styles.cpf}
                        placeholder="Digite seu cpf"
                        {...register("cpf", {
                            required: "Por favor, insira o seu cpf",
                            maxLength: {
                                value: 11,
                                message: "Máximo de 11 caracteres permitido"
                            },
                            minLength: {
                                value: 11,
                                message: "Minimo de 11 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, cpf: evento.target.value })}
                    />
                    {errors.cpf && <p>{errors.cpf.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="nascimento" className={styles.nascimento}>Data de nascimento:</label> <br />
                    <input
                        type="text"
                        id={styles.nascimento}
                        className={styles.nascimento}
                        placeholder="Digite sua data de nascimento"
                        {...register("nascimento", {
                            required: "Por favor, insira sua data de nascimento",
                            maxLength: {
                                value: 20,
                                message: "Máximo de 20 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, nascimento: evento.target.value })}
                    />
                    {errors.nascimento && <p>{errors.nascimento.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="email" className={styles.email}>E-mail:</label> <br />
                    <input
                        type="email"
                        className={styles.email}
                        id={styles.email}
                        placeholder="Digite seu email"
                        {...register("email", {
                            required: "Por favor, insira o seu email",
                            maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, email: evento.target.value })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="senha" className={styles.senha}>Senha:</label> <br />
                    <input
                        type="password"
                        id={styles.senha}
                        className={styles.senha}
                        placeholder="Digite sua senha"
                        {...register("senha", {
                            required: "Por favor, insira a sua senha",
                            maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, senha: evento.target.value })}
                    />
                    {errors.senha && <p>{errors.senha.message}</p>}
                    <br />
                </div>

                <div>
                    <label htmlFor="cep" className={styles.cep}>CEP:</label> <br />
                    <input
                        type="text"
                        id={styles.cep}
                        className={styles.cep}
                        placeholder="Digite seu CEP"
                        {...register("cep", 
                        { 
                            required: "Por favor, insira o seu CEP",
                            onBlur: () => buscarCep(),
                                maxLength: {
                                value: 8,
                                message: "Máximo de 8 caracteres permitido" },
                                minLength: {
                                    value: 8,
                                    message: "Minimo de 8 caracteres permitido" }})}
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
                        id={styles.numero}
                        className={styles.numero}
                        placeholder="Digite o número e o complemento"
                        {...register("numero", {
                            required: "Por favor, insira o número e seu complemento",
                            maxLength: {
                                value: 100,
                                message: "Máximo de 100 caracteres permitido"
                            }
                        })}
                        onChange={(evento) => setNovoUsuario({ ...novoUsuario, numero: evento.target.value })}
                    />
                    {errors.numero && <p>{errors.numero.message}</p>}
                    <br />
                </div>

                <button type="submit" className={styles.cadastrar}>Cadastrar</button>
                <hr />
                </div>
            </form>

            <Link to="/Login" className={styles.login}>Login</Link>

        </div>
    )
}