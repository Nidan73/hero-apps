import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AllApps from "../Components/AllApps/AllApps";
import AppsDetail from "../Components/AppDetail/AppsDetail";

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
        },
        {
            path : '/appsdetail/:id',
            loader : ()=> fetch('/Apps.json'),
            Component : AppsDetail,
        }
    ]
  },
]);


export default router ;