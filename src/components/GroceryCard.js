

const GroceryCard = ( props) => {
    const {resData}=props;

    const {
        icon_image_url,
        name,


    }=resData;
    return (
        <div className="flex w-48 pl-10 pt-12 -mx-2 flex-wrap">
               <div className="my-2 w-32 rounded-lg bg-white-100 hover:bg-gray-200" >
                <img  className="rounded-lg h-28 bg-white w-28 ml-2 mt-2"  alt="res-logo"src={icon_image_url} />
                <h3 className="font-bold pl-2  text-lg">{name}</h3>
               
                </div>
                
        </div>
    );
}

export default GroceryCard;
