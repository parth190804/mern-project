import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';
import axios from 'axios'
function LoginForm(){
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
          console.log(response.data);
          sessionStorage.setItem('lusername',formData.username);
          sessionStorage.setItem('lname',formData.name);
          sessionStorage.setItem('lpassword',formData.password);
          const response_1 = await axios.get(`${BASE_URL}/api/bio/login` ,{
            params: {
              lusername: sessionStorage.getItem('lusername'),
            },
          });
          if (response_1.status === 200) {
            // If the request is successful
            console.log('User bio:', response_1.data.bio);
           sessionStorage.setItem( 'bio', response_1.data.bio);
          } else {
            // If the request is not successful
            console.error('Failed to fetch user bio');
            // Handle the error condition, e.g., show an error message to the user
          }
          window.location.href = '/user_profile';
        } catch (error) {
          console.log(error);
          if (error.response) {
            
            setErrorMessage(error.response.data.message);
            alert('Invalid Credentials!! Please try again');
            window.location.reload();
          } else {
            setErrorMessage('An error occurred. Please try again.');
          }
        }
      };
return(
<>
    <div className="sign-up-form">
    <h4>Login</h4>
    <form onSubmit={handleSubmit}>
    <div className="group">
        <label htmlFor="user" className="label">Enter your Name</label><br/>
        <input id="name" type="text" className="input" onChange={handleChange} placeholder="Enter your name" name="name"/>
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Email Address</label><br/>
        <input id="username" name="username" type="text" className="input" onChange={handleChange} placeholder="Enter your email address" />
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Password</label><br/>
        <input id="pass" type="password" className="input" data-type="password" name="password" onChange={handleChange} placeholder="Enter your password" />
    </div>
    <div className="group">
        <input type="submit" className="button" value="Sign Up" />
    </div>
    </form>
    {errorMessage && <p>{errorMessage}</p>}
</div>
<p> <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'2%' }}>
                 <button onClick={() => navigate('/register')} style={{ fontSize: '22px', backgroundColor: 'black', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}><u>Don't Have an account !! Register Yourself here</u></button>
                </div></p>
</>
         )
         }
export default LoginForm
        