import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import ResuarantCard from "./components/RestaurantCard";

const styleCard = {
    backgroundColor: "#f0f0f0"
}
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
       <div className = "app">
        <Header/>
        <Body/>
       </div> 
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
