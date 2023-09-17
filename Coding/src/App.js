
import React from "react";
import ReactDOM from "react-dom/client";
import "../Styles/header.scss"; 
import "../Styles/logo.scss"; 
import "../Styles/restaurantCard.scss"; 
import "../Styles/body.scss"; 
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";


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





const Header= () => {
  return (
  
    <div className="header ">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
           <li>About</li>
            <li>Contact</li>
             <li>Cart</li>
        </ul>
      </div>
    </div>
   
  );
};






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
root.render(<AppLayout/>)//way to render react element
// root.render(<HeaderComponent/>)way to render fuctional component