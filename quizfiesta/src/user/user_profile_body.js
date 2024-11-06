import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function User_body(){
  const navigate = useNavigate();
   const uusername=sessionStorage.getItem('lusername');
   const uname=sessionStorage.getItem('lname');
   const upass=sessionStorage.getItem('lpassword');
   const bio_1=sessionStorage.getItem('bio');
    return(
        <div>
                   <div className="row">
        <div className="box_selected">
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
         <div className="box" onClick={() => navigate('/user_create_quiz')} style={{ cursor: 'pointer' }}>
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

        {/* Profile Dashboard of User */}
    <div className="leadership">
    <div className="row">
      <div className="head-values" style={{color:"black"}}>
        <h4>Your Profile</h4>
      </div>
      <div className="note" style={{color:"black"}}>
        <p>Your profile is always safe with us at QuizFiesta!! Have a look at your details you have filled and if needed you can update them</p>
      </div>
        <div className="leader">
        <div className="leader-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png" alt="leader name"/>
        </div>
        <div className="leader-note">
          <div style={{borderBottom:'3px solid rgb(5, 112, 78)'}}>
            <h5><b>Name:</b>  {uname}</h5>
          </div>
          <div><h5><b>Email Id:</b>  {uusername} </h5>
          </div>
          <p>Bio: {bio_1}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
}
export default User_body