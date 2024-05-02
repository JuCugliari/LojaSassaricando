/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import getJson from "../hooks/getJson";

export const UsuarioContext = createContext();

export const UsuarioContextProvider = ({ children }) => {
 const [dados, isLoading] = getJson("../../public/data/cards.json");
 const [usuarios, setUsuarios] = useState([]);

 useEffect(() => {
  console.log(dados);
  if (!!dados && !isLoading) {
   setUsuarios(dados.usuarios);
  }
 }, [dados]);

 return (
  <UsuarioContext.Provider value={{ usuarios, setUsuarios, isLoading }}>
   {children}
  </UsuarioContext.Provider>
 );
};
