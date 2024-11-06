import React,{useEffect} from 'react'
import Navbar from "../components_home/navbar";
import Footer from "../components_home/footer";
import About_Content from "./about_content";
function About(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'About QuizFiesta';
      }, []);
    return(
    <div>
    <Navbar/>
    <About_Content/>
    <Footer/>
    </div>
    )
}
export default About;