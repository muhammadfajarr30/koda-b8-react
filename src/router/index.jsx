import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <App /> },
    ],
  },
]);
