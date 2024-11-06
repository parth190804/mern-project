import React,{useEffect} from 'react';
import Navbar from './navbar';
import Body from './body';
import Footer from './footer';

function Home(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'QuizFiesta:One Stop for All Quizes ';
      }, []);
    return(
    <div>
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
    )
}
export default Home;