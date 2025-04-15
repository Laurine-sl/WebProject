import { createBrowserRouter } from "react-router-dom";
import Home from "../Home.jsx";
import Map from "../Map.jsx";
import InfoRestaurant from "../InfoRestaurant.jsx";

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
    path: "/info_restaurant/:nameRestau",
    element: <InfoRestaurant />,
  },
]);

export default router;
