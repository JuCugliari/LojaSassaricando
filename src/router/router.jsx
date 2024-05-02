import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProdutosPage from "../pages/ProdutosPage/ProdutosPage";
import CadastroProdutosPage from "../pages/CadastroProdutosPage/CadastroProdutoPage";
import App from "../App";
import Error from "../pages/ErrorPage/Error";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
   {
    path: "/",
    element: <LoginPage />
   },
   {
    path: "/produtos",
    element: <ProdutosPage />
   },
   {
    path: "/cadastro",
    element: <CadastroProdutosPage />
   }
  ]
 }
]);

export default routers;
