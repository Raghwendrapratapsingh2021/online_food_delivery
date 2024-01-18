import React from "react";
import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {lazy,Suspense} from "react";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utills/userContext";
import {Provider} from "react-redux";
import appStore from "./utills/appStore";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import GroceryMenu from "./components/GroceryMenu";

// chunking concept
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));

// Body
const AppLayout=()=>{

const [userName,setUserName]=useState();
//authentication

useEffect(()=>{
//api call and some username and password
const data={
   name:"Raghwendra",
}
setUserName(data.name);

},[])

return (

 <Provider   store={appStore }  >
         <UserContext.Provider value={{loggedInUser:userName, setUserName}}> 
               <div>
                     <Header/>
                     <Outlet/>
                     <Footer/>
               </div>
         </UserContext.Provider>
</Provider>
)
};

const appRouter=createBrowserRouter([
   {
    path:"/",
    element:<AppLayout/>,
    children:[

           {
            path:"/",
            element:<Body/>,
           },
           {
            path:"/about",
            element:<Suspense fallback={<h1>Loaddddiiiiiingggggg!!!!!!</h1>}><About/></Suspense>
        
           },
           {
            path : "/contactUs",
            element :<ContactUs/>
           },
           {
              path:"/grocery",
              element:<Suspense fallback={<h1>Loaddddiiiiiingggggg!!!!!!</h1>}><Grocery/></Suspense>
           },
           {
            path:"/restaurants/:resId",   // dynamic routing
            element: <RestaurantMenu/>,
           },
           {
            path:"/grocery/:Id",   // dynamic routing
            element: <GroceryMenu/>,
           },
           {
            path:"/cart",
            element:<Cart/>,
           }
    ],
    errorElement:<Error/>, 
   },
  

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




//part 2,3 


// const parent=React.createElement("div",{id:"parent"},[

// React.createElement("div",{id: "child"},[
// React.createElement("h1",{},"this is namste react"),
// React.createElement("h2",{},"By raghwendra"),
// ]),

// React.createElement("div",{id: "child"},[
//     React.createElement("h1",{},"this is namste react"),
//     React.createElement("h2",{},"By raghwendra"),
//     ]),

// ]);

// //console.log(parent);

// // const heading= <h1> namste reac.</h1>
// // console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



// part 4

// const Title=()=>( 
//     <>
//     <h1 className="head">Namste Title</h1>
  
//    </>
// )

// const Heading =()=>(
//   <div>
//   { Title()}   
//   <Title/>
//   <Title></Title>
//   <h1 className="heading"> Namsate Functional component.</h1>
//   </div> 
// );



