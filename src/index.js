import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components Files
import Error from "./Components/Error";
import Mobile from "./Components/Mobile/Mobile";
import MobileDetail from "./Components/Mobile/MobileDetail";
import Laptop from "./Components/Laptop/Laptop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [],
  },
  {
    path: "/mobile",
    element: <Mobile />,
  },
  {
    path: "/mobiledetail/:id",
    element: <MobileDetail />,
  },
  {
    path: "/laptop",
    element: <Laptop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
