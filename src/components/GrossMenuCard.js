const GrossMenuCard = ({ resData }) => {
    // Ensure that resData is not undefined and has the properties you're trying to access
    console.log(resData); // Should log each subcategory object
  
    return (
      <div className=" p-2 -m-1 inline-block">
        
          <div className="border shadow-xl rounded-xl  ">
                <div className=" h-80 w-60  rounded-xl bg-white-100" >
                    <img  className="rounded-lg h-52  w-40 m-10"  alt="res-logo"src={resData.icon_image_url} />
                    <h3 className="font-bold pl-5 -my-16 text-lg">{resData.name}</h3>
                </div>
                <span > 
                    <button className="border border-green-600 rounded-lg text-green px-5 py-3 ml-40 -my-16 bg-green-100 absolute"> ADD</button>
                </span>
          </div>
      
      </div>
    );
  }
  
  export default GrossMenuCard;
  