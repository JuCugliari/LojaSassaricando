/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import getJson from "../hooks/getJson";

export const ProdutosContext = createContext();

export const ProdutosContextProvider = ({ children }) => {
 const [dados, isLoading] = getJson("/data/cards.json");
 const [produtos, setProdutos] = useState([]);

 useEffect(() => {
  console.log(dados);
  if (!!dados && !isLoading) {
   setProdutos(dados.produtos);
  }
 }, [dados]);

 return (
  <ProdutosContext.Provider value={{ produtos, setProdutos, isLoading }}>
   {children}
  </ProdutosContext.Provider>
 );
};
