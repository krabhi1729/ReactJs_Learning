/*Manipulating HTML DOM using Javascript

 const heading=document.createElement("h1");
 heading.innerHTML="Hello React";
 const root=document.getElementById("root");
 root.appendChild(heading);*/

//Manipulating HTML DOM using React
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     style: {
//       background: "red",
//     },
//     className: "title",
//   },
//   "heading"
// );
// console.log(heading);
const heading = (
  <h1 id="title" style={{ background: "red" }} className="title">
    heading
  </h1>
);
console.log(heading);


//   "h1",
//   {

//     id: "title",
//   }, 
//   "heading1"
// );
const heading1 = <h1 id="title">heading1</h1>;
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading1]
// );

const container = (
  <div id="container">
    {heading}
    {heading1}
  </div>
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
