import { useSelector } from "react-redux";
import {clearCart}   from "../utills/cartSlice"
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";

const Cart=()=>{

// both 1 and 2 work same but one is more efficient
//1 subscribe
 const cartItems=useSelector((store)=>store.cart.items);


// 2 const store =useSelector((store)=>store);
//  const cartItems=store.cart.Items;

 const dispatch=useDispatch();
 const handleClearCart=()=>{

 dispatch(clearCart());


 }

return (

<div className=" m-4 p-4 text-center"> 

  <h1 className="text-2xl font-bold text-center"> Cart</h1>
  <div className="w-6/12 m-auto border-black">
    <button className="p-2 m-2 bg-yellow-600 text-center rounded-lg text-white"
    onClick={handleClearCart}>Clear Cart</button>

   {cartItems.length===0 &&( 
    <h1>Cart is empty, Add Items to the cart🤣!!!</h1>
   )}
    <ItemList  items={cartItems}/>
  </div>

</div>


)

}


export default Cart;