
import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/header.scss"; 
import "../Styles/logo.scss"; 
import "../Styles/restaurantCard.scss"; 
import "../Styles/body.scss"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


// const AppLayout = () => {
//   return (
//     {
//       /**Header
//        *   -logo
//        *   -navbaritem(list item)
//        *   -cart
//        * Body
//        *   -search bar
//        *   -list of restaurant
//        *    -restaurant card
//        *      -Image
//        *      -name
//        *      -rating
//        *      -Cousins
//        * Footer
//        *   -links
//        *   -Copyright
//        */
//     }
//   )
// }

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)