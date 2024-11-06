import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import QuizForm from './quiz'
import Navbar from '../components_home/navbar'
import Footer from '../components_home/footer'
function CreateQuiz(){
    const navigate = useNavigate();
    const uusername = sessionStorage.getItem("lusername");
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Create your Quiz';
    
        // Check if the user is logged in
        if (!uusername) {
          // User is not logged in, redirect to the login page
          navigate("/login");
        }
      }, [navigate, uusername]);
      
    return(
        <div>
        <Navbar />
        <div className="row">
        <div className="box">
  <div style={{ textDecoration: 'none', color: 'inherit' }}>
    <button onClick={() => navigate('/user_profile')} style={{ fontSize: '22px', border: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
      <div>
        <h5 style={{ fontSize: '26px', fontWeight: '600' }}>
          Profile Management
        </h5>
        <p style={{ fontSize: '18px', textAlign: 'left' }}>
          Manage your profile with ease. Customize and make it yours!
        </p>
      </div>
    </button>
  </div>
</div>

         <div className="box">
         <div style={{ textDecoration: 'none', color: 'inherit' }}>
         <button onClick={() => navigate('/attempt_quiz')} style={{ fontSize: '22px', border: 'none', cursor: 'pointer', color: 'inherit', textAlign: 'left', display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
                 <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Attempt a Quiz
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Ready to put your knowledge to the test? Go ahead, attempt a quiz and embrace the challenge!
                 </p>
                 </div>
                </button>
                </div>  
         </div>
         <div className="box_selected" onClick={() => navigate('/user_create_quiz')} style={{ cursor: 'pointer' }}>
  <div>
    <h5 style={{ fontSize: '26px', fontWeight: '600' }}>
      Create A Quiz
    </h5>
    <p style={{ fontSize: '18px', textAlign: 'left' }}>
      Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
    </p>
  </div>
</div>
<div className="box" onClick={() => navigate('/user_attempt_quiz')} style={{ cursor: 'pointer' }}>
  <div>
    <h5 style={{ fontSize: '26px', fontWeight: '600' }}>
      Attempted Quizes
    </h5>
    <p style={{ fontSize: '18px', textAlign: 'left' }}>
      Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
    </p>
  </div>
</div>
     </div>
        <QuizForm />
        <Footer />
        </div>
    )
}
export default CreateQuiz