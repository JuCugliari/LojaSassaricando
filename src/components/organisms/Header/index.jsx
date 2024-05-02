/* eslint-disable */
import { Link } from "react-router-dom";
import "./style.css";

function TrilhasHeader() {
 return (
  <div className="header">
   <div className="logo">
    <Link to="/">
     <img src="/assets/logo.png" alt="logo" width={80} height={80} />
    </Link>
   </div>
   <div className="titulo">
    <span>Sassaricando</span>
   </div>
   <div className="subtitulo">
    <span>Moda Feminina</span>
   </div>
  </div>
 );
}

export default TrilhasHeader;
