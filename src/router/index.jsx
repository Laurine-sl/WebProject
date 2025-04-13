import { createBrowserRouter } from "react-router-dom";
import Home from "../Home.jsx";
import Map from "../Map.jsx";
import InfosRestaurant from "../InfosRestaurant.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/infos_restaurant/:nameRestau",
    element: <InfosRestaurant />,
  },
]);

export default router;
