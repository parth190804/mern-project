import React,{useEffect} from 'react'
import Attempt from './user_attempted_body'
import Footer from '../components_home/footer'
import Navbar from '../components_home/navbar'
import { useNavigate } from 'react-router-dom'

function UserAttempt(){
    const navigate =useNavigate();
    const uusername = sessionStorage.getItem("lusername");
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Attempted Quizzes';
    
        // Check if the user is logged in
        if (!uusername) {
          // User is not logged in, redirect to the login page
          navigate("/login");
        }
      }, [navigate, uusername]);
    return(
        <div>
            <Navbar/>
            <Attempt/>
            <Footer/>
        </div>
    )
}
export default UserAttempt