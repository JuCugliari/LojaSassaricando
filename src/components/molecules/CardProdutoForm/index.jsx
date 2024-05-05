/* eslint-disable */
import {
 Grid,
 Card,
 CardMedia,
 Typography,
 CardContent,
 CardActions,
 Button
} from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";

function CardProdutoForm({ dadosProduto }) {
 function comprarProduto(produto) {
  console.log(produto);

  window.open(
   `https://api.whatsapp.com/send?phone=5548984586588&text=Olá,%20Gostaria%20de%20saber%20sobre%20o%20preço%20do%20produto%20item:%20${produto.codigo}`,
   "_blank"
  );
 }

 return (
  <Grid className="produtos">
   <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
    <CardMedia
     sx={{ height: 200 }}
     image="/assets/image.png"
     title="green iguana"
    />
    <CardContent className="cardContent">
     <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ textAlign: "center" }}>
      {dadosProduto.nome}
     </Typography>
     <Typography
      variant="caption"
      display="block"
      gutterBottom
      sx={{
       textAlign: "center",
       backgroundColor: "#bbb7b7",
       width: "100px",
       borderRadius: "5px"
      }}>
      Cód: {dadosProduto.codigo}
     </Typography>
     <Typography
      variant="body1"
      color="text.secondary"
      sx={{
       mt: 1,
       mb: 1,
       textAlign: "start",
       size: "large",
       fontWeight: "bold"
      }}>
      R${dadosProduto.preco}
     </Typography>
     <Typography variant="body2" color="text.secondary">
      Desconto de 5% no pix ou em 5x sem juros.
     </Typography>
    </CardContent>
    <CardActions sx={{ width: "100%", justifyContent: "flex-end" }}>
     <Button onClick={() => comprarProduto(dadosProduto)} size="small">
      Comprar
     </Button>
    </CardActions>
   </Card>
  </Grid>
 );
}

export default CardProdutoForm;
