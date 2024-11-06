import React,{useEffect} from "react";
import Navbar from "../components_home/navbar";
import Footer from "../components_home/footer";
import User_body from "./user_profile_body";
import { useNavigate } from "react-router-dom";

function User (){
    const navigate = useNavigate();
    const uusername = sessionStorage.getItem("lusername");
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Dashboard';
    
        // Check if the user is logged in
        if (!uusername) {
          // User is not logged in, redirect to the login page
          navigate("/login");
        }
      }, [navigate, uusername]);
      
    return(
        <div>
            <Navbar/>
            <User_body/>
            <Footer/>
        </div>
    )
}
export default User;