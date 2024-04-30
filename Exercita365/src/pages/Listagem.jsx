import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { LocaisContext } from "../context/LocaisContext";
import { useContext } from "react";
import styles from "./Listagem.module.css"
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Listagem () {

  const { lerLocais, locais, setLocais, novoLocal, editarLocal, removerLocal, preencherForm } = useContext(LocaisContext);

 

  const handleDelete = (id) => {
    removerLocal(id);
  };

  return (
    <div>
        <Navbar />
    <div className={styles.geral}>
      <div className={styles.tituloPagina}>
        <h1>Confira e edite os locais já cadastrados</h1>
      </div>
      {locais.map((local, index) => {
        return (
          <Card key={index}>
            <CardContent>
              <div className={styles.container}>
                <div className={styles.texto}>
                  <h1 className={styles.nlocal}>{local.nlocal}</h1>
                  <h3 className={styles.idusuario}>Id usuário: {local.idusuario}</h3>
                  <p className={styles.descricao}>Descrição: {local.descricao}</p>
                  <p className={styles.cep}>CEP: {local.cep}</p>
                  <p className={styles.coordenadas}>Coordenadas: {local.coordenadas}</p>
                  <div className={styles.tipoesporte}>Tipo de esporte: {local.tipoesporte}</div>
                </div>
              </div>
              <Link to= {`/cadastro-local-exercicio?id=${local.id}`} className= {styles.login}>Editar local</Link>
              <button onClick={() => handleDelete(local.id)}>Exclua local</button>
            </CardContent>
          </Card>
        )
      })}
    </div>
    <Footer />

</div>
  );
}