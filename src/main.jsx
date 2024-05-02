/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={routers}></RouterProvider>
);
