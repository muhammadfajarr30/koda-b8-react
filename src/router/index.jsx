import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/product/LandingPage";
import BrowsePage from "../pages/product/BrowsePage";
import MainLayout from "/src/layouts/MainLayout";


export const router = createBrowserRouter([
  {
    children: [{ path: "/", element: <App /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/products", element: <LandingPage /> },
      { path: "/browse", element: <BrowsePage /> },
    ],
  },
]);

