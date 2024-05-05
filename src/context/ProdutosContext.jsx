/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const ProdutosContext = createContext();
export const ProdutosContextProvider = ({ children }) => {
 const [produtos, setProdutos] = useState([]);
 const [totalProdutos, setTotalProdutos] = useState(0);

 useEffect(() => {
  getProdutos();
 }, []);

 async function getProdutos() {
  const response = await fetch("http://localhost:3000/produtos");
  const data = await response.json();

  setProdutos(data);
  setTotalProdutos(data.length);
 }

 async function getProdutoPorId(idConsulta) {
  const response = await fetch("http://localhost:3000/produtos/" + idConsulta);
  const dados = await response.json();
  return dados;
 }

 function cadastrarProdutos(dadosProduto) {
  if (dadosProduto.nome == "") {
   alert("O produto precisa ter um nome!");
  }

  fetch("http://localhost:3000/produtos", {
   method: "POST",
   body: JSON.stringify(dadosProduto),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    setTotalProdutos(totalProdutos + 1);
    alert("Produto cadastrado com sucesso!");
    getProdutos();
   })
   .catch(() => alert("Erro ao cadastrar produto!"));
 }

 function editarProdutos(dadosProduto, id) {
  const produtoAtualizar = {
   ...dadosProduto,
   id: id
  };

  fetch("http://localhost:3000/produtos/" + id, {
   method: "PUT",
   body: JSON.stringify(produtoAtualizar),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    alert("Produto Editado com sucesso!");
    getProdutos();
   })
   .catch(() => alert("Erro ao editar produto!"));
 }

 function removerProdutos(id) {
  fetch("http://localhost:3000/produtos/" + id, {
   method: "DELETE"
  })
   .then(() => {
    setTotalProdutos(totalProdutos - 1);
    alert("Produto removido com sucesso!");
    getProdutos();
   })
   .catch(() => alert("Erro ao remover produto!"));
 }

 return (
  <ProdutosContext.Provider
   value={{
    produtos,
    setProdutos,
    cadastrarProdutos,
    getProdutos,
    editarProdutos,
    removerProdutos,
    getProdutoPorId,
    totalProdutos
   }}>
   {children}
  </ProdutosContext.Provider>
 );
};
