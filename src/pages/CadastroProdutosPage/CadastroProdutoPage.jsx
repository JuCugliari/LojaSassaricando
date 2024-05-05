import { Grid } from "@mui/material";
import CadastroProdutosForm from "../../components/molecules/CadastroProdutosForm";
import styles from "./CadastroProdutosPage.module.css";

function Cadastro() {
 return (
  <Grid className={styles.containerPrincipalCadastro}>
   <CadastroProdutosForm />
  </Grid>
 );
}

export default Cadastro;
