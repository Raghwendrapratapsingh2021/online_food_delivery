import {useState} from "react";

const User=( props)=>{

const [add, setAdd]=useState(0);
const [ sub, setSub]=useState(100);
return (
<div  className =" user-card">

  <h2>Name:{props.name}</h2>
  <h3>Address:{props.address}</h3>
  <h4>Contact:{props.contact}</h4>
  <button onClick={() => setAdd(add+1)}>Add:{add}</button>
  <button onClick={()=>setSub(sub-1)}>Sub:{sub}</button>

</div>

)
};

export default User;