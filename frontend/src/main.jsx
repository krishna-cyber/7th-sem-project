/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import ErrorPage from "./error-page.jsx";
import UserRegisterForm from "./components/UserRegisterForm.jsx";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BloodRequestForm from "./components/BloodRequestForm.jsx";
import DonorList from "./components/DonorList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/register-user",
        element: <UserRegisterForm />,
      },
      {
        path: "/request-blood",
        element: <BloodRequestForm />,
      },
      {
        path: "/donor-list",
        element: <DonorList />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: ,
      //   element: <p>hello</p>,
      // },
    ],
  },
]);

// query client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
