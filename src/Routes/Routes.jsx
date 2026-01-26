import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import AllApps from "../Components/AllApps/AllApps";
import AppsDetail from "../Components/AppDetail/AppsDetail";
import Install from "../Components/Install/Install";
import AppError from "../Components/Error/AppError";
import error from '../assets/error-404.png'
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
            errorElement : <AppError />,
        },
        {
            path : '/install',
            Component : Install,
        },
    ]
    

  },
  {path : '*',
      element : <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
        <img src={error} alt="" />
      <h1 className="text-5xl font-bold">Oops, page not found!</h1>
      <p className="py-6">
        The page you are looking for is not available.
      </p>
      <Link to ='/'>
      <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  </div>
</div>,
 }
]);


export default router ;