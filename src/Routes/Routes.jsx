import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root 
  },
]);


export default router ;