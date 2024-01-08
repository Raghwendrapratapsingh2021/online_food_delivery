import {useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurant from "../utills/useRestaurant";
import ResCategory from "./ResCategory";

//242286
const RestaurantMenu=()=>{
const {resId}=useParams();
const resInfo=useRestaurant(resId);
//console.log(resInfo);


const[showIndex,setShowIndex]=useState(0);




if(resInfo===null) 
return (<Shimmer/>);

const { name,cuisines,costFortwoMessage,
}=resInfo?.cards[0]?.card?.card?.info;
console.log(resInfo?.cards[0]?.card?.card?.info);


const { 
       itemCards,
      }=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
  c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

);

console.log(categories);
  
return (
<div className="text-center">
<h1 className="font-bold my-6 text-2xl">{name}</h1>
<p className="font-bold text lg">
    {cuisines.join(", ")}-{costFortwoMessage}
</p>

{/* categories accordian */}
 {categories.map((category,index)=>
 //controlled component
 <ResCategory 
 key={category?.card?.card?.title}
  data ={category?.card?.card}
  showItems={index===showIndex?true:false}
  setShowIndex={()=>setShowIndex(index)}

  />)}

</div>
)
};

export default RestaurantMenu;