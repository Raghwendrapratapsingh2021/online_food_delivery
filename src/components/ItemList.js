
import {useDispatch} from "react-redux";
import {CDN_URL} from "../utills/contents";
import { addItem } from "../utills/cartSlice";

const ItemList=( {items})=>{

  const dispatch=useDispatch();

//dispatch an action
handleAddItem=(item)=>{

dispatch(addItem(item));

}





return (
<div>
   
{ items.map((item)=>(
  <div  className="p-2 ml-5 text-center border-gray-200 border-b-2 text-left flex justify-between" 
   key={item.card.info.id}
   >
   <div className="w-9/12">
    <div className="py-2">
      <span >{item.card.info.name}</span>
      <span>
        - Rs 
        {item.card.info.price
        ?item.card.info.price/100
        :item.card.info.defaultPrice/100}
        </span>

    </div>
       <p className="text-xs">{item.card.info.description}</p>  
    </div>
    {/* image */}

   <div className="w-3/12 p-4">
   <div className="absolute">
    <button className="px-2 py-1  bg-white shadow-lg absolute rounded-lg my-12 hover:bg-zinc-600  "
    onClick={ ()=>handleAddItem(item)}>
      Add+</button>
    </div>
   <img src={CDN_URL+item.card.info.imageId} alt="" className="w-14" />
   
   </div>

  </div>
))}
</div>
);
};
export default ItemList;