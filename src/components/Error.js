import {useRouteError} from "react-router-dom";

const Error=()=>{

    const err= useRouteError();

return (

<div className="w-full  m-2 p-2 py-48 bg-gray-800 ">
    <h1 className="text-center text-white text-7xl font-bold m-2 p-2">Oops!!!🤭</h1>
   
    <h2  className="text-center text-white text-7xl font-bold m-2 p-2">Something went wrong !!</h2>
    {/* <h3>{err.status}:{err.statusText}</h3> */}
</div>

)
}

export default Error;