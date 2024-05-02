import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import { ProdutosContextProvider } from "../src/context/ProdutosContext";
import "./App.css";

/* eslint-disable */
function App() {
 return (
  <div className="root">
   <ProdutosContextProvider>
    <Header />
    <Outlet />
    <Footer />
   </ProdutosContextProvider>
  </div>
 );
}

export default App;
