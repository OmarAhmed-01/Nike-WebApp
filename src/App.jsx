import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ShoeCard from "./components/ShoeCard";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
  },
  {
    path: "/products/:productId",
    element: <ShoeCard/>,
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}