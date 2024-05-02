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

function CardProduto({ dadosProduto }) {
 return (
  <Grid className="produtos" xs={10}>
   <Card sx={{ maxWidth: 345, backgroundColor: "#d9d9d9", boxShadow: 5 }}>
    <CardMedia
     sx={{ height: 200 }}
     image="/assets/image.png"
     title="green iguana"
    />
    <CardContent>
     <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ textAlign: "center" }}>
      {dadosProduto.produto}
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
      Cód: {dadosProduto.codProduto}
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
     <Button size="small">Comprar</Button>
    </CardActions>
   </Card>
  </Grid>
 );
}
import { useContext } from "react";

export default CardProduto;
