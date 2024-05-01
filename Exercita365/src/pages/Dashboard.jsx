import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { LocaisContext } from "../context/LocaisContext";
import { useContext } from "react";
import styles from "./Dashboard.module.css"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard () {

  const { locais, adicionarLocal, setLocais } = useContext(LocaisContext);

  return (
    <div>
    <Navbar />
    <div className={styles.geral}>
      <div className={styles.tituloPagina}>
        <h1>Explore locais e mantenha a saúde em dia</h1>
      </div>
      <div className={styles.paragrafo1}>
      <p>Explore locais cadastrados, envie as suas próprias sugestões e se exercite!</p>
      </div>
      <div className={styles.paragrafo2}>
      <p>Confira os locais já cadastrados:</p>
      </div>
      {locais.map((local, index) => {
        return (
          <Card key={index} style={{ backgroundColor: 'transparent', margin: '20px' }}>
            <CardContent>
              <div className={styles.container}>
                <div className={styles.texto}>
                  <h1 className={styles.nlocal}>{local.nlocal}</h1>
                  <h3 className={styles.idusuario}>Id usuário: {local.idusuario}</h3>
                  <p className={styles.descricao}>Descrição: {local.descricao}</p>
                  <p className={styles.cep}>CEP: {local.cep}</p>
                  <p className={styles.logradouro}>Logradouro: {local.logradouro}</p>
                  <p className={styles.bairro}>Bairro: {local.bairro}</p>
                  <p className={styles.localidade}>Cidade: {local.localidade}</p>
                  <p className={styles.estado}>Estado: {local.estado}</p>
                  <p className={styles.coordenadas}>Coordenadas: {local.coordenadas}</p>
                  <div className={styles.tipoesporte}>Tipo de esporte: {local.tipoesporte}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
    <Footer />

</div>
  );
}