import { createBrowserRouter } from "react-router-dom";
import Home from "../Home.jsx";
import Map from "../Map.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
]);
