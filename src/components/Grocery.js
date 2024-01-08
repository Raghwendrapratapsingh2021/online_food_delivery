import {useState ,useEffect} from "react";
import {mockData}  from "../utills/mockData"
import GroceryCard from "./GroceryCard";
import { Link } from "react-router-dom";


const Grocery =()=>{

  const [listOfFruits, setlistOfFruits ]= useState([]);
  
        
        useEffect(()=>{
          setlistOfFruits(mockData?.data?.merchant.categories);
          },[]);
          console.log(mockData);

      
    

return(

 <div className="flex flex-wrap ">
       {/* {   listOfFruits.map((ele)=> <GroceryCard key={ele.id}  resData={ele}/>)    } */}

       {
            // listOfFruits?.map((ele) => (
            // <Link  key={ele.id}
            //  to={"/grocery/"+ele.id}>
            // < GroceryCard resData={ele}/>
            //  </Link>
            // ))
       }
            {listOfFruits?.map((category) => (
                  <Link
                    key={category.id}
                    to={`/grocery/${category.id}`}
                    state={{ subcategories: category.subcategories }} // Pass the subcategories data here
                  >
                    <GroceryCard resData={category} />
                  </Link>
                ))}
       
 </div>



)






}

export default Grocery;