import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AllApps from "../Components/AllApps/AllApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root, 
    children : [
        {
            index : true , 
            path : '/',
            loader : ()=> fetch('/Apps.json'),
            Component : Home
        },
        {
            path : '/allApps',
            loader : ()=> fetch('/Apps.json'),
            Component : AllApps,
        }
    ]
  },
]);


export default router ;