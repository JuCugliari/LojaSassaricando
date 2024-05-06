import "./index.css";
import "../../../../src/App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Grid } from "@mui/material";

function TrilhasFooter() {
 return (
  <Grid className="containerFooter">
   <footer className="footer">
    <ul>
     <li>
      <a href="URL-LOJA" target="_blank">
       <FacebookIcon sx={{ color: "black" }} />
      </a>
     </li>
     <li>
      <a href="URL-LOJA" target="_blank">
       <InstagramIcon sx={{ color: "black" }} />
      </a>
     </li>
     <li>
      <a
       href="https://api.whatsapp.com/send?phone=5548984586588&text=Olá,%20Gostaria%20de%20mais%20informações%20sobre%20o%20produto.%20"
       target="_blank">
       <WhatsAppIcon sx={{ color: "black" }} />
      </a>
     </li>
    </ul>
   </footer>
  </Grid>
 );
}

export default TrilhasFooter;
