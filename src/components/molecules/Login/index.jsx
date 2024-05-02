/* eslint-disable */
import "./style.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import InputTextField from "../../atoms/InputTextField/InputTextField";
import InputPassoword from "../../atoms/InputPassword/InputPassword";
import { useState } from "react";

function Login({ submit }) {
 const [usuario, setUsuario] = useState({
  usuario: "",
  password: ""
 });

 function Logar() {
  submit(usuario);
 }

 return (
  <div className="container-login">
   <Box
    component="form"
    sx={{
     "& > :not(style)": { m: 1, width: "50ch" }
    }}
    autoComplete="off">
    <InputTextField
     label="Usuário"
     value={usuario.usuario}
     onChange={(evento) =>
      setUsuario({ ...usuario, usuario: evento.target.value })
     }
    />
    <InputPassoword />

    <div className="esqueceu">
     <Link to="/esqueceu">Esqueceu a senha?</Link>
    </div>

    <div className="button">
     <Button
      className="button-login"
      variant="contained"
      sx={{
       backgroundColor: "#83ace9",
       color: "#000000",
       fontWeight: "700",
       fontFamily: "Gabriela"
      }}
      onClick={() => Logar()}>
      Login
     </Button>
    </div>
   </Box>
  </div>
 );
}

export default Login;
