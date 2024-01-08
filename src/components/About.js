import UserContext from "../utills/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";





class AboutClass extends React.Component{

     constructor(props){
        super(props);

    //     console.log("Parent Constructor");
    // 
 }

componentDidMount(){
//     console.log("parent component Did Mount");
}

render(){
    // console.log("parent render");

  // use hooks in classbase component







return (

 <div className="text-center pt-5">
 <h1 className="font-bold text-2xl">About</h1>

 <span className="">
 loggedIn User
<UserContext.Consumer>
{({loggedInUser})=><span className="font-bold p-2 ">{ loggedInUser}</span>}
</UserContext.Consumer>

 </span>
 {/* <h2>It is demo food delivery WebApp where i learned react concept. </h2> */}

 <UserClass  name="Raghwendra Pratap Singh" address="Gorakhpur" contact="raghwendrapratapsingh01@gmail.com" />

 </div>
)
}
}
export default AboutClass; 