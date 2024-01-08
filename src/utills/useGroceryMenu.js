
import {useState,useEffect} from "react";
import { mockData } from "./mockData";


const useGroceryMenu=(resId)=>{
    console.log(resId);
    const [Info,setInfo]=useState(null);

useEffect(()=>{
    setInfo(mockData?.data?.merchant.categories);
},[]);
console.log(Info);
return Info;
};

export default useGroceryMenu;