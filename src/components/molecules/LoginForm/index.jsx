import { Grid } from "@mui/material";
import { TextField, Button } from "@mui/material";
import "./index.css";

import { useContext } from "react";
import { UsuariosContext } from "../../../context/UsuarioContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function LoginForm() {
 const { login } = useContext(UsuariosContext);
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 function sendLogin(formValue) {
  login({
   ...formValue
  });
 }

 return (
  <>
   <Grid className="containerLogin" sx={{ flexDirection: "column" }}>
    <Grid className="loginForm" sx={{ flexDirection: "column" }}>
     <Grid className="logoLogin">
      <img src="/assets/logo.png" alt="Logo Sassaricando" />
     </Grid>
     <form className="form">
      <Grid className="camposEntrada" sx={{ flexDirection: "column" }}>
       <TextField
        className="email"
        id="outlined-basic"
        type="email"
        variant="outlined"
        name="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
       <TextField
        className="password"
        id="outlined-password-input"
        type="password"
        autoComplete="current-password"
        name="senha"
        error={!!errors.senha}
        helperText={errors.senha?.message}
        {...register("senha", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
      </Grid>
      <Grid className="containerEsqueceuSenha">
       <Link className="esqueceuSenha">Esqueceu a senha?</Link>
      </Grid>
     </form>
     <Grid className="containerButtonLogin">
      <Button
       onClick={handleSubmit(sendLogin)}
       className="buttonLogin"
       variant="contained"
       size="medium">
       Login
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default LoginForm;
