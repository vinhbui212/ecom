import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from "./Pages/SignUp.tsx";
import Home from "./Pages/Home.tsx";
import LogIn from "./Pages/LogIn.tsx";
import Verification from "./Pages/Verification.tsx";
import Profile from "./Pages/Profile.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductDetailsPage from "./Pages/ProductDetailsPage.tsx";

import Cart from "./Pages/Cart.tsx";

import Catalog from "./Pages/Catalog.tsx";
import Wishlist from "./Pages/Wishlist.tsx";
import Categories from "./Pages/Categories.tsx";
import AdminVerfication from "./Pages/AdminVerfication.tsx";


import CustomerOrders from "./Pages/CustomerOrders.tsx";
import Dashboard from "./Pages/Dashboard.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/adminVerfication",
    element: <AdminVerfication />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/customerOrders",
    element: <CustomerOrders />
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
