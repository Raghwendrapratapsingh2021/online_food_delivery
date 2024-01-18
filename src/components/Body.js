import RestaurantCard from "./RestaurantCard";
import resList, { mockData } from "../utills/mockData"
import { useState,useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utills/useOnlineStatus";
import {withPromtedlabel}  from "./RestaurantCard";
import UserContext from "../utills/userContext";


const Body = ()=>{

   const [listOfRestaurants, setlistOfRestaurant ]= useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
   const [searchTxt, setsearchTxt]=useState("");
   

   
   
   const RestaurantCardPromoted=withPromtedlabel(RestaurantCard);// HIGHER ORDER FUNCTION CONCEPT
 
    useEffect(()=>{
    fetchData();
    },[]);

   const fetchData=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.632957&lng=77.219385 " 
        
      );
    
    const json = await data.json();
    console.log(json.data);
  
  //optional chaining
   setlistOfRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   setfilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      
};
 



const onlineStatus=useOnlineStatus();
// console.log(onlineStatus);
if(onlineStatus===false){
return(
   <h1>
   looks like you are offline!! Please check your internet connection;
   </h1>

);
}

const{setUserName,loggedInUser}=useContext(UserContext );




   if (listOfRestaurants !== undefined)
   return  listOfRestaurants.length===0?(<Shimmer/>):(
    
    <div className="body" >
         <div className="filter flex justify-between">

            <div className="search m-4 p-4">
             <input
              type="text" 
              placeholder="Ex:Burger-King!"
              className="border border-solid border-black p-2 m-2 rounded-xl bg-white "  
              value={searchTxt} 
              onChange={(e)=>{
              setsearchTxt(e.target.value);
              }} 
             />

             <button className="px-4 py-2 m-2 bg-yellow-600  rounded-lg" 
              onClick={()=>{
            // filter the restuarant cards and update the UI
            
            //searchText

             console.log(searchTxt);

             const filteredRestaurant=listOfRestaurants.filter(
               (res)=>res.info.name.toLowerCase().includes(searchTxt)
             );
             setfilteredRestaurant(filteredRestaurant);


             }}
             >search</button>

            </div>

            <div className="search m-4 p-4 flex items-center"> 
               <button
               className="px-4 py-2 bg-yellow-600 rounded-lg"
               onClick={()=>{
               //  console.log("cliked");
               const filteredList=listOfRestaurants?.filter(
               (res)=>res.info.avgRating > 4.5

               );
                  setfilteredRestaurant(filteredList);
               }}
               >
                  Top Rated Restaurant 
               </button>
            </div>

            <div  className="search m-5 p-8 flex item-center">
            <label className="p-1"> User Name: </label>
            <input className="border border-black rounded-xl p-2" value={loggedInUser}   onChange={(e)=>setUserName(e.target.value)}/>
            
            </div>

         </div>



   <div>
        




   </div>


      



         <div className=" flex flex-wrap">
          
         {/* <RestaurantCard resData={reslist[0]}/>
         <RestaurantCard resData={reslist[1]}/>
         <RestaurantCard resData={reslist[2]}/>
         <RestaurantCard resData={reslist[3]}/>
         <RestaurantCard resData={reslist[4]}/>
         <RestaurantCard resData={reslist[5]}/>
         <RestaurantCard resData={reslist[6]}/>
         */}
    
         {/* use map loop to create card */}
         
         {
            filteredRestaurant?.map((restaurant) => (
           <Link  key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}>
            {restaurant.info.promoted?(<RestaurantCardPromoted  resData={restaurant}/>):
            (
               <RestaurantCard resData={restaurant}/>
            )}
             
             </Link>
            // key={restaurant.data.id}
            ))
         }
        </div>
    
    
    </div>
    
    )};

    export default Body;