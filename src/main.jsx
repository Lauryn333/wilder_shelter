import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MapComponent from "./components/MapComponent.jsx";
import Refuge from "./components/Refuge.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/map",
        element: <MapComponent />,
      },
      {
        path: "/refuge/:id",
        element: <Refuge />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
