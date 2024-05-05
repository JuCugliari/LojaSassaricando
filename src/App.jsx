import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import "./App.css";

/* eslint-disable */
function App() {
 return (
  <div className="root">
   <Header />
   <Outlet />
   <Footer />
  </div>
 );
}

export default App;
