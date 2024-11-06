import { useNavigate } from 'react-router-dom';
function Body(){
  const navigate = useNavigate();
    return(
    <div>
        <div className="row" style={{borderBottom:"7px solid white"}}>
                <div className="text" style={{ marginLeft: '5%',marginTop:'10%', marginRight:'5%'}}>
                        <h4>QuizFiesta</h4>
                        <p style={{fontSize:"28px"}}><b>Engage Enrich Explore</b></p>
                      <div style={{marginTop:'5%',padding:"2% 5%"}}>
                        <p >Embark on a learning adventure with QuizFiesta, where knowledge becomes exciting! Join us in the pursuit of 
                        learning while having fun competing with your friends every step of the way. </p>
                        <p>With a variety of quizzes to attempt and even the option to create your own, QuizFiesta 
                        is your one-stop destination for both education and entertainment. So why wait? Jump right in, attempt quizzes, 
                        or create your own to enjoy with your friends! </p>
                      </div>
                </div>
                <div className="image">
                    <img src="https://i.imgur.com/8uzA1wg.png" style={{borderRadius:'5vh',marginTop:'10%',height:'100%'}}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'2%' }}>
                 <button onClick={() => navigate('/login')} style={{ fontSize: '16px', backgroundColor: '#1100ff', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}>Login/Register</button>
                </div>

        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#e10000',borderRadius:'10vh'}}>
                <div className="text">
                        <h4>Quizzes Covering the World</h4>
                      <div style={{marginTop:'5%',padding:"2% 5%"}}>
                        <p>Explore knowledge across sectors with our quizzes. Elevate skills through engaging questions, 
                        honing critical thinking. Empowering you for a diverse world. Join us to transcend boundaries!</p></div>
                </div>
                <div className="image">
                    <img src="https://i.imgur.com/LX89xPU.png" style={{borderRadius:'5vh',marginTop:'10%'}}/>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#ff00c8',borderRadius:'10vh'}}>
               <div className="image" style={{float:'left'}}>
                    <img src="https://i.imgur.com/TOYujIw_d.webp?maxwidth=760&fidelity=grand"/>
                </div>
                <div className="text" style={{float:'right'}}>
                        <h4>Practice Quizzes</h4>
                      <div style={{marginTop:'5%',padding:"2% 5%"}}>
                        <p>Dive into diverse practice quizzes, thoughtfully designed to enrich your understanding. 
                        Whether aiming for excellence or broadening horizons, our quizzes offer an engaging learning platform. Delve in, 
                        test your knowledge, and uncover insights – all while growing with us.</p>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'2%' }}>
                 <button onClick={() => navigate('/quiz')} style={{ fontSize: '16px', backgroundColor: '#1100ff', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}>Go to Quiz Section</button>
                </div>
                </div>
        </div>
        <div className="row" style={{margin:'2% 5%',backgroundColor:'#ff7300',borderRadius:'10vh'}}>
                <div className="text">
                        <h4>Challenge Your Friends</h4>
                      <div style={{marginTop:'5%',padding:"2% 5%"}}>
                        <p>"Ready to challenge friends' skills or dive into a rapid-fire quiz? Welcome to 'Create A Quiz,'
                         where captivating quizzes await. Design brain-teasers for friends or foster family fun through friendly competitions.
                          Craft interactive quizzes that ignite curiosity, inviting everyone to join the learning journey together.</p>
                        <p>Be it a party or a moment of leisure, create a quick quiz and let the fun challenges begin!".</p>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'2%' }}>
                       <button onClick={() => navigate('/user_create_quiz')} style={{ fontSize: '16px', backgroundColor: '#1100ff', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}>Create a Quiz</button>
                        </div>
                </div>
                <div className="image">
                    <img src="https://i.imgur.com/f4my5DU.png" style={{borderRadius:'5vh'}}/>
                </div>
        </div>
    </div>
    )
}
export default Body