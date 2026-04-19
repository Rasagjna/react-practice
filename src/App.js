import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ResuarantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
// destructuring - {resName, cuisine}
// const ResuarantCard = (props) =>
// {
//     console.log(props);
//     return (
//         <div className = "res-card" style={styleCard} >
//             <img className = "res-logo" alt="res-logo"   src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi" />
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// props - allows you to send data to a component. It is an object.
//similar to passing arguments to a funcion
//install json viewer plugin.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
    {
        path: "/",
        element: <Body/>,
      },
       {
        path: "/home",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
  //  {
  //     path:"/about",
  //     element:<About/>
  // },
  //  {
  //     path:"/contact",
  //     element:<Contact/>
  // }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />);
