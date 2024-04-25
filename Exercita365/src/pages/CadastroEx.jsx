import styles from "./CadastroEx.module.css"
import * as React from "react";
import { useForm } from "react-hook-form"
import { LocaisContext } from "../context/LocaisContext";
import { useContext } from "react";


function CadastroEx () {
    const { register,
        handleSubmit, 
        formState: { errors },
        reset
        } = useForm();

        const { adicionarLocal } = useContext (LocaisContext);

        function onSubmit(formValue) {
            console.log ("Valores do formulario", formValue);
            adicionarLocal(formValue);
            reset();
        }

        console.log (errors);

    return (
        <form className={styles.formulario} onSubmit={handleSubmit((onSubmit) )}>

            <h1 className={styles.titulo} id={styles.titulo}>Cadastro de novo local de exercício</h1>

            <div>
            <label htmlFor="nlocal" id={styles.nlocal1}>Nome do local:</label> <br />
            <input type="text" className={styles.nlocal2} id={styles.nlocal2} 
            {...register("nlocal", { 
            required: "Por favor, insira o nome do local",
                maxLength: {
                value: 100,
                message: "Máximo de 100 caracteres permitido" }})} placeholder="digite o nome do local do exercício"></input><br />

               {errors.nlocal && <p>{errors.nlocal.message}</p>}
            </div>
            
            <div>
            <label htmlFor="idusuario" id={styles.idusuario1}>Seu id de usuário:</label> <br />
            <input type="text" className={styles.idusuario2} id={styles.idusuario2} 
            {...register("idusuario", { 
                required: "por favor, insira o id", maxLength: {
                value: 20,
                message: "no máximo de 20 caracteres" }})} placeholder="digite o seu id de usuário"></input><br />

                {errors.idusuario && <p>{errors.idusuario.message}</p>}
            </div>

            <div>
            <label htmlFor="descricao" id={styles.descricao1}>Descrição do local:</label> <br />
            <input type="text" className={styles.descricao2} id={styles.descricao2}
            {...register("descricao", { 
                required: "por favor, insira a descrição", maxLength: {
                value: 300,
                message: "no máximo 300 caracteres" }})} placeholder="digite a descrição do local"></input><br />

                {errors.descricao && <p>{errors.descricao.message}</p>}
            </div>

            <div>
            <label htmlFor="cep" id={styles.cep1}>CEP do local:</label> <br />
            <input type="text" className={styles.cep2} id={styles.cep2} 
            {...register("cep", { 
                required: "por favor, insira o cep", maxLength: {
                value: 400,
                message: "no máximo 400 caracteres" }})} placeholder="digite o CEP"></input><br />

                {errors.cep && <p>{errors.cep.message}</p>}
            </div>

            <div>
            <label htmlFor="coordenadas" id={styles.coordenadas1}>Coordenadas (longitude e latitude):</label> <br />
            <input type="text" className={styles.coordenadaso2} id={styles.coordenadas2}
            {...register("coordenadas", { 
                required: "por favor, insira as coordenadas", maxLength: {
                value: 300,
                message: "no máximo 300 caracteres" }})} placeholder="digite as coordenadas"></input><br />

                {errors.coordenadas && <p>{errors.coordenadas.message}</p>}
            </div>

            <div>
            <label htmlFor="tipoesporte" id={styles.tipoesporte1}>Tipo de esporte:</label> <br />
            <input type="text" className={styles.tipoesporte2} id={styles.tipoesporte2} 
            {...register("tipoesporte", { 
                required: "por favor, insira o tipo de esporte", maxLength: {
                value: 200,
                message: "no máximo 200 caracteres" }})} placeholder="caminhada, natação, musculação, etc"></input><br />

                {errors.tipoesporte && <p>{errors.tipoesporte.message}</p>}
            </div>

            <div id={styles.cadastroContainer}>
                <input className={styles.cadastro} id={styles.cadastro} type="submit" value="Cadastrar"></input>
                <button id={styles.voltar} className={styles.voltar}>Voltar</button>
            </div>

        </form>

    )
}

export default CadastroEx