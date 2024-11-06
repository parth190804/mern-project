import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';


function Attempt(){
    const navigate = useNavigate();
    const username = sessionStorage.getItem("lusername");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Fetch data from your MongoDB collection
      axios.get(`${BASE_URL}/api/fetch_score/attempt`,{
        params: {
            username: username
        }
      }) // You should replace this with your backend API endpoint to fetch data
        .then((response) => {
            console.log(response.data);
            console.log(username);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);

    

    //   const filteredData = data.filter((item) => item.username === username);
    const filteredData = Array.isArray(data) ? data.filter((item) => item.username === username) : [];
    console.log(filteredData);

    return(
        <div>
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
<div className="box_selected" onClick={() => navigate('/user_attempt_quiz')} style={{ cursor: 'pointer' }}>
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

    {/* Table displaying attempted Quiz */}
    <div>
            <h4>Check out your all Attempted Quizes</h4>
            <table style ={{color: 'white',border:'2px solid white'}}>
                <thead>
                    <tr style={{ border:'2px solid white'}}>
                        {/* <th>Quiz Id</th> */}

                        <th style={{ border:'2px solid white'}}>Catergory id</th>
                        {/* <th>Date of Attempt</th> */}
                        <th>Score</th>
                        {/* <th>Total Marks</th> */}
                        <th style={{ border:'2px solid white'}}>Username</th>
                    </tr>
                </thead>
                <tbody>
                        {filteredData.map((item, index) => (
                            <tr style={{ border:'2px solid white'}} key={index}>
                                <td style={{ border:'2px solid white'}}>{item.category}</td>
                                <td style={{ border:'2px solid white'}}>{item.score}</td>
                                <td style={{ border:'2px solid white'}}>{item.username}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
     </div>
    )
}
export default Attempt