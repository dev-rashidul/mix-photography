import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Services/AddService/AddService";
import MyReviews from "../Pages/Services/Reviews/MyReviews/MyReviews";
import ServiceDetails from "../Pages/Services/ServiceDetals/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../SignUp/Login/Login";
import Register from "../SignUp/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://mix-photography-server.vercel.app/home`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`https://mix-photography-server.vercel.app/services`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>fetch(`https://mix-photography-server.vercel.app/services/${params.id}`)
          
      },
      {
        path: "/add-service",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
          
      },
      {
        path: "/my-reviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
          
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default routes;
