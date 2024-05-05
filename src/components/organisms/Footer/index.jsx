import "./index.css";
import "../../../../src/App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    </ul>
   </footer>
  </Grid>
 );
}

export default TrilhasFooter;
