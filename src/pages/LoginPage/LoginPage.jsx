import Login from "../../components/molecules/Login";

function LoginPage() {
 function Logar() {
  alert("Login efetuado com sucesso");
 }

 return (
  <>
   <Login submit={Logar} />
  </>
 );
}

export default LoginPage;
