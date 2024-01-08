import {useState, useEffect} from "react";
const useOnlineStatus=()=>{
const [onlineStatus,setOnlineStatus]=useState(true);

useEffect(()=>{

    window.addEventListener("ofline",()=>{
    setOnlineStatus(false);
    });

    window.addEventListener("online",()=>{
        setOnlineStatus(true);
        });
},[]);

return onlineStatus;


};


export default useOnlineStatus;