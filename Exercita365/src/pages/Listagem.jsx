import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { LocaisContext } from "../context/LocaisContext";
import { useContext } from "react";
import styles from "./Listagem.module.css"

export default function Listagem () {

  const { locais, adicionarLocal, setLocais } = useContext(LocaisContext);

  return (
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
                  <h3 className={styles.idusuario}>Por: {local.idusuario}</h3>
                  <p className={styles.descricao}>Descrição: {local.descricao}</p>
                  <p className={styles.cep}>CEP: {local.cep}</p>
                  <p className={styles.coordenadas}>Coordenadas: {local.coordenadas}</p>
                  <div className={styles.tipoesporte}>Tipo de esporte: {local.tipoesporte}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}
