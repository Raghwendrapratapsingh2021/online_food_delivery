import {CDN_URL} from "../utills/contents";

const RestaurantCard=(props)=>{
    const { resData }=props;

    const{
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId

    }=resData?.info;



    return (
    
  <div className="m-5  items-center  p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-400">
         <img  className="rounded-lg" 
    alt="res-logo"
         src= { CDN_URL + cloudinaryImageId }
          />
    
    
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="bg-yellow-600 w-14">{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
    </div>
    
    )
    }; 


// higheer Order Component
//input -RestaurantCard=> restaurantCardPromoted

export const withPromtedlabel=(RestaurantCard)=>{
return(props)=>{

return (
<div>
<label className="absolute bg-yellow-600 text-white ml-2 p-1 rounded-lg " >
   Promoted
</label>

<RestaurantCard {...props}/>
</div>
  )
  }
};

    export default RestaurantCard;