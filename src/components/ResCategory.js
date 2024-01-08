import ItemList from "./ItemList"
import {useState} from "react";



const ResCategory=({data,showItems,setShowIndex})=>{
// UnControll
//const [showItems, setShowItems]=useState(false); 

const handleClick=()=>{
setShowIndex();

}


return (
<div>
      {/* Header */}
      <div className=" w-6/12 bg-gray-50 shadow-lg p-4  my-4 mx-auto">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
        </span>
        <span>⤵️</span>
        </div>
  { showItems && <ItemList items={data.itemCards}/>}
    {/* Accordian Body */}
    
   </div> 
</div>
);
};

export default ResCategory;