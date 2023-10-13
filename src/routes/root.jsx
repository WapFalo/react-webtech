import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import ErrorPage from "../pages/404";
import Mentions from "../pages/MentionsLegales";
import Details from "../pages/DetailsPokemon";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/mentions",
        element: <Mentions />
      },
      {
        path: "/details",
        element: <Details />
      }
    ]
  }
]);

export default router;