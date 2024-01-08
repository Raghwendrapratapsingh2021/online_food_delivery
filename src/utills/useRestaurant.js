import { MENU_API } from "./contents";
import {useState,useEffect} from "react";


const useRestaurant=(resId)=>{
  console.log(resId);
    const [resInfo,setResInfo]=useState(null);

useEffect(()=>{
fetchdata();
},[]);

const fetchdata=async ()=>{
const data= await fetch(MENU_API+resId);
const json=await data.json();
//console.log(json.data);
setResInfo(json.data);
};
 //console.log(resInfo);
return resInfo;
};

export default useRestaurant;
