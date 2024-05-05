import {
 Select,
 TextField,
 MenuItem,
 Grid,
 Button,
 FormControl
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProdutosContext } from "../../../context/ProdutosContext";
import UploadFoto from "../../atoms/UploadFoto";
// import { DropzoneDialog } from "material-ui-dropzone";

function CadastroProdutosForm() {
 const {
  register,
  handleSubmit,

  formState: { errors }
 } = useForm();

 const { cadastrarProdutos } = useContext(ProdutosContext);

 const navigate = useNavigate();

 function sendCadastro(formValue) {
  cadastrarProdutos({ ...formValue });
  navigate("/");
 }

 return (
  <>
   <Grid className="containerCadastroProdutos">
    <Grid className="cadastroFormProdutos" sx={{ flexDirection: "column" }}>
     <form>
      <Grid className="logoCadastroProdutos">
       <img src="/assets/logo.png" alt="Logo Sassaricando" />
      </Grid>
      <Grid className="gridNomeProduto" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        variant="outlined"
        placeholder="Código"
        error={!!errors.codigo}
        helperText={errors.codigo?.message}
        sx={{ height: "1rem" }}
        {...register("codigo", {
         required: "Campo obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 10 caracteres."
         }
        })}
       />
       <TextField
        type="text"
        variant="outlined"
        placeholder="Nome"
        error={!!errors.nome}
        helperText={errors.nome?.message}
        sx={{ height: "1rem" }}
        {...register("nome", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
      </Grid>
      <Grid className="dadosComplementares">
       <FormControl fullWidth>
        <Select
         defaultValue="Selecione"
         {...register("tamanho", {
          required: "Este campo é obrigatório."
         })}>
         <MenuItem value="Selecione" disabled>
          <em>Selecione o Tamanho</em>
         </MenuItem>
         <MenuItem value="P">P</MenuItem>
         <MenuItem value="M">M</MenuItem>
         <MenuItem value="G">G</MenuItem>
         <MenuItem value="GG">GG</MenuItem>
        </Select>
       </FormControl>

       <TextField
        placeholder="Preço"
        variant="outlined"
        error={!!errors.preco}
        helperText={errors.preco?.message}
        {...register("preco", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 6,
          message: "Este campo aceita no máximo 6 caracteres."
         }
        })}
       />
      </Grid>
      <UploadFoto />
     </form>
     <Grid
      className="containerButtonCadastroProdutos"
      sx={{ flexDirection: "column" }}>
      <Button
       onClick={handleSubmit(sendCadastro)}
       className="buttonCadastrar"
       variant="contained"
       size="medium">
       Cadastrar
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default CadastroProdutosForm;
