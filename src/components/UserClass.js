import React from "react";
class UserClass extends React.Component{

   constructor(props){
    super(props);

    this.state={
      userInfo:{
        name:"Dummy",
        location:"default",
        avatar_url:"htp//dummy-photo.com"
      },
      count:0,
      count2:2
    }

    // console.log(this.props.name+"Child Constructor");
   }


  async componentDidMount(){
    //console.log(this.props.name+"Child Component Did Mount");
    const data=await fetch("https://api.github.com/users/Raghwendrapratapsingh2021");
    const json= await data.json();

      this.setState({
        userInfo:json,
      });


   // console.log(json);
}

componentDidUpdate(){
    // console.log("component Did update");
}

componentWillUnmount(){
    // console.log("component will unmount");
}

render(){
  
  // console.log(this.props.name+"child Render");

  // const {count,count2}=this.state;
  const {name, location,avatar_url}=this.state.userInfo;
  return (
  <div  className =" flex">
   <img className="w-96 h-96 rounded-full ml-28" src={avatar_url} alt="" />
   {/* <h2>Name:{name}</h2>
   <h2>location:{location}</h2> */}
   
  {/* <button  onClick={()=>
   this.setState({
    count:this.state.count+1,
     count2:this.state.count2+1,
   })
}>       
 count</button> */}
              <div className="w-96 h-96 m-4 bg-gray-200 ml-20 shadow-xl rounded-xl">
                <h2 className="font-bold pt-20 text-xl">Name:{this.props.name}</h2>
                <h3 className="font-bold">Address: { this.props.address}</h3>
                <h4 className="font-bold">Contact: { this.props.contact}</h4>
                <h2 className="p-2">It is demo food delivery WebApp where i learned react concept.where i learned lazy loading concept,class component,useState,useEffect,router concept,redux,work with real time API data , implement grocery item with lazy loading and many more......  </h2>
              </div>
                    {/* <h2>count:{count}</h2>
                    <h2>count2:{count2}</h2> */}
    </div>
    )
   }

}

export default UserClass;