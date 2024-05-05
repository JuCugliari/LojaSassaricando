/* eslint-disable */
import styles from "./ProdutosPage.module.css";
import { Grid, Typography } from "@mui/material/";
import CardProdutoForm from "../../components/molecules/CardProdutoForm";
import { useContext } from "react";
import { ProdutosContext } from "../../context/ProdutosContext";

function ProdutosPage() {
 const { produtos, isLoading } = useContext(ProdutosContext);

 return (
  <Grid
   sx={{ flexDirection: "column" }}
   className={styles.containerPrincipalPagina}>
   <Grid className={styles.containerPrincipalProdutos}>
    <Grid className={styles.logoPrincipal}>
     <img src="/assets/logo.png" alt="logo" width={400} height={400} />
    </Grid>
    <Grid
     container
     className={styles.containerProdutos}
     sx={{ display: "grid", mb: 5, ml: 0 }}>
     {!isLoading &&
      produtos !== null &&
      produtos.map((produto, index) => (
       <CardProduto dadosProduto={produto} key={index} />
      ))}
    </Grid>
   </Grid>
   <Grid className={styles.bannerLoja}>
    <Typography
     className={styles.textoBannerLoja}
     gutterBottom
     variant="h5"
     component="div"
     sx={{ color: "black" }}>
     Entrega personalizada! Entre em contato e descubra qual a mais vantajosa
    </Typography>
   </Grid>
  </Grid>
 );
}

export default ProdutosPage;
