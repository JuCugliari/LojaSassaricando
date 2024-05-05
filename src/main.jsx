/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router/router";
import { ProdutosContextProvider } from "../src/context/ProdutosContext";
import { UsuariosContextProvider } from "./context/UsuarioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <UsuariosContextProvider>
  <ProdutosContextProvider>
   <RouterProvider router={routers}></RouterProvider>
  </ProdutosContextProvider>
 </UsuariosContextProvider>
);
