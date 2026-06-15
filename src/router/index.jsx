import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/product/LandingPage";
import BrowsePage from "../pages/product/BrowsePage";
import MainLayout from "/src/layouts/MainLayout";
import DetailPage from "../pages/product/DetailPage";

export const router = createBrowserRouter([
  {
    children: [{ path: "/", element: <App /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/products", element: <LandingPage /> },
      { path: "/browse", element: <BrowsePage /> },
      { path: "/detail-page", element: <DetailPage /> },
    ],
  },
]);

