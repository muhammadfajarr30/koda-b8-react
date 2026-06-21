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
import ProfilLayout from "../layouts/ProfilLayout";
import MyOrderPage from "../pages/profile/MyOrderPage";
import WishlistPage from "../pages/profile/WishlistPage";
import AddressListPage from "../pages/profile/AddressListPage";
import EditProfilePage from "../pages/profile/EditProfilePage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import CheckoutSuccessPage from "../pages/checkout/CheckoutSuccessPage";


export const router = createBrowserRouter([
  // {
  //   children: [{ path: "/", element: <App /> }],
  // },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/browse/:slug", element: <BrowsePage /> },
      { path: "/detail-page/:id", element: <DetailPage /> },
      { path: "/cart", element: <CartPage /> },
      {path: "/checkout-success", element: <CheckoutSuccessPage/>}
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage/>
  },

  {
    path: "/forgot-password",
    element: <ForgotPasswordPage/>
  },

  {
    element: <CheckoutLayout />,
    path: "/checkout",
    children: [
      {
        path: "address",
        element: <AddressPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "confirm-order",
        element: <ConfirmOrderPage />,
      },
    ],
  },

  {
    element: <ProfilLayout />,
    path: "/profile",
    children: [
      {
        path:"order",
        element: <MyOrderPage/>
      },
      {
        path: "wishlist",
        element: <WishlistPage/>
      },
      {
        path: "address-list",
        element:<AddressListPage/>
      },
      {
        path: "edit-profile",
        element:<EditProfilePage/>
      },
    ]
  },
]);
