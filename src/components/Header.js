import {Link} from "react-router-dom";
import {useState,useContext} from "react";
import { LOGO_URL } from "../utills/contents";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/userContext";
import { useSelector } from "react-redux";

const Header =()=>{


  const [btnNameReact, setbtnNameReact]=useState("login");
  const onlinestatus=useOnlineStatus;   // custom hooks

// useContext
 
const {loggedInUser}= useContext(UserContext);

// subscribing our store using a selector

const cartItems = useSelector( (store)=>store.cart.items);
console.log(cartItems);

    return (
    <div className="flex justify-between border border-solid bg-yellow-600 shadow-lg  rounded-2xl">
     
     {/* logo */}
        <div className="flex items-center">
            <img className="w-32 px-4 mx-5 rounded-full" src={LOGO_URL} alt="" />
        </div>
    
      {/* nav-item */}
       <div className="flex items-center">
         <ul className="flex p-1 m-1">

            <li  className="p-4">
              Online Status:{onlinestatus?"✅":"🥲"}
            </li>
            <li   className="p-4 hover:bg-zinc-400"> 
            <Link  to ="/"> Home </Link> 
            </li>

            <li  className="p-4  hover:bg-zinc-400">
            <Link  to ="/about"> About Us</Link>  
            </li>

            <li className="p-4   hover:bg-zinc-400">
              <Link  to ="/contactUs"> Contact Us</Link> 
            </li>

            <li className="p-4   hover:bg-zinc-400">
              <Link  to ="/grocery"> Grocery</Link> 
            </li>

             <li className="p-4   hover:bg-zinc-400"> 
             
             <Link  to ="/cart"> Cart-{cartItems.length}🛒</Link> 
             
              </li>
             
             <button 
             className=" hover:bg-zinc-400"    
             onClick={()=>{
             btnNameReact==="login"?setbtnNameReact("logout")
             :setbtnNameReact("login");
              console.log(btnNameReact);
             }}
             
             > {btnNameReact} 
             </button>

             <li className="p-4  font-bold"> {loggedInUser} </li>

         </ul>
         
        </div>
    
    </div>
    
    
    )};

    export default Header;

