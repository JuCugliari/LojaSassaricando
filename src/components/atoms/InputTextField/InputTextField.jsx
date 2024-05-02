import TextField from "@mui/material/TextField";

function InputTextField({ label, value, onChange }) {
 return (
  <>
   <TextField
    id="usuario"
    label={label}
    variant="outlined"
    value={value}
    onChange={onChange}
    autoComplete="email"
    autoFocus
   />
  </>
 );
}

export default InputTextField;
