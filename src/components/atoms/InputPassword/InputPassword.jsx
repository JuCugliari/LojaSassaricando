import { TextField } from "@mui/material";

function InputPassoword() {
 return (
  <>
   <TextField
    id="senha"
    label="Senha"
    type="password"
    autoComplete="current-password"
    fullWidth
   />
  </>
 );
}

export default InputPassoword;
