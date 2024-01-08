
import { LOGO_URL } from "../utills/contents";
const Footer = () => {
  

  return (
  
    <div className="bg-black w-full flex  flex-wrap  m-0 rounded-xl px-52 text-center">
       <div className="text-white p-8 ">
         <h1 className="font-bold text-2xl">Company</h1>
            <ul>
              <li>About</li>
              <li>Careers</li>
               <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
               <li>Swiggy Genie</li>
            </ul>
        </div>

        {/* term & condition */}
        <div className="text-white p-8">
          <h1 className="font-bold text-2xl">Legal</h1>
            <ul>
               <li>Term & Conditions</li>
               <li>Cookie Policy</li>
               <li>Privacy Policy</li>
            </ul>

           <h1 className="font-bold text-2xl">Contact Us</h1>
             <ul>
                <li>Help & Support</li>
                <li>Partner With Us</li>
                <li>Ride With Us</li>
             </ul>
        </div>

      <div className="text-white p-8 ">
          <h1 className="font-bold text-2xl">  We deliver To </h1>
           <ul>
             <li>Banglore</li>
             <li>Gurugaon</li>
             <li>Delhi</li>
             <li>Noida</li>
              <li>Pune</li>
          </ul>
      </div>

      <div className="flex items-center mr-5">
            <img className="w-48 p-2 m-2 rounded-full" src={LOGO_URL} alt="" />
        </div>
    <div>
  </div>
 </div>

  )
   
};

export default Footer;