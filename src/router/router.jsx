/* eslint-disable */
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProdutosPage from "../pages/ProdutosPage/ProdutosPage";
import CadastroProdutosPage from "../pages/CadastroProdutosPage/CadastroProdutoPage";
import App from "../App";
import Error from "../pages/ErrorPage/Error";

const isAuthenticated = localStorage.getItem("usuarioLogado") !== null;
const PrivateRoute = ({ children }) => {
 return isAuthenticated ? children : <LoginPage />;
};

const routers = createBrowserRouter([
 {
  path: "/login",
  element: <LoginPage />
 },
 {
  path: "/produtos",
  element: <ProdutosPage />
 },
 {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
   {
    path: "/cadastro",

    element: (
     <PrivateRoute>
      <CadastroProdutosPage />
     </PrivateRoute>
    )
   }
  ]
 }
]);

export default routers;
