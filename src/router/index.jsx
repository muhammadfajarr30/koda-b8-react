// import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/product/LandingPage";
import BrowsePage from "../pages/product/BrowsePage";
import MainLayout from "/src/layouts/MainLayout";
import DetailPage from "../pages/product/DetailPage";
import CartPage from "../pages/product/CartPage";
import LoginPage from "../pages/auth/LoginPage";
import CheckoutLayout from "../layouts/CheckoutLayout";
import AddressPage from "../pages/checkout/AddressPage";
import PaymentPage from "../pages/checkout/PaymentPage";
import ConfirmOrderPage from "../pages/checkout/ConfirmOrderPage";

export const router = createBrowserRouter([
  // {
  //   children: [{ path: "/", element: <App /> }],
  // },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/browse", element: <BrowsePage /> },
      { path: "/detail-page", element: <DetailPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <CheckoutLayout />,
    path: "/checkout",
    children: [
      {
        path: "address",
        element: <AddressPage/>
      },
      {
        path: "payment",
        element: <PaymentPage/>
      },
      {
        path: "confirm-order",
        element: <ConfirmOrderPage/>
      }
    ],
  },
]);
