import React,{useEffect} from 'react'
import LoginForm from "./login";
import Navbar from "../components_home/navbar";
import Footer from "../components_home/footer";
function Login(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Login/Register';
      }, []);
    return(
    <div>
    <Navbar/>
    <LoginForm/>
    <Footer/>
    </div>
    )
}
export default Login;