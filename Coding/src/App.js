import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/header.scss";
import "../Styles/logo.scss";
import "../Styles/restaurantCard.scss";
import "../Styles/body.scss";
import Body from "./components/Body";
import {Footer} from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
  return (
    <>
      <Header />
     {/*{outlet}*/}
     <Outlet/>
      <Footer />
    </>
  );
};
const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
        {
      path:"/",
      element:<Body/>,
    },
      {
      path:"/about",
      element:<About/>,
    },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path:"/restaurant/:id",
    element:<RestaurantMenu/>,
  },
],
  },  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout} />);
