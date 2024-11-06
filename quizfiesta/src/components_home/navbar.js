import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear session storage variables
    sessionStorage.removeItem('lusername');
    sessionStorage.removeItem('lname');
    sessionStorage.removeItem('lpassword');
    sessionStorage.removeItem('bio');
    
    // Redirect to the homepage or any desired page
    navigate('/login');
  };

    return(
        <div>
        <nav className="navbar navbar-expand-md" style={{ paddingLeft: '2%',backgroundColor:"rgb(7, 56, 99)",borderBottom:"15px solid #ee4b00"}}>
      <div className="container-fluid all-show ">
    <a className="navbar-brand" href="#"><img src="https://i.imgur.com/Q4npSPA_d.webp?maxwidth=760&fidelity=grand" style={{width:"20%",height:"20%"}}/></a> 
    
    <section className="wrapper">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button onClick={() => navigate('/quiz')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center' }}>QuizSection</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/about')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex',width:'100%', alignItems: 'center' }}>About QuizFiesta</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/login')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left', display: 'flex', alignItems: 'center'}}>Login</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/home')} style={{ fontSize: '14px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center'}}>Home</button>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{ fontSize: '16px', textAlign: 'left' }} href="#" id="accountsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</a>
            <ul className="dropdown-menu" aria-labelledby="accountsDropdown" style={{ backgroundColor: "rgb(72, 169, 255)",padding:'5% 5%',margin:'0'}}>
              <li><button onClick={() => navigate('/user_profile')} style={{ fontSize: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
                <span>Dashboard</span></button></li>
                <li><button onClick={() => navigate('/user_attempt_quiz')} style={{ fontSize: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
                <span>Quiz Attempted</span></button></li>
              <li><li><button onClick={() => navigate('/attempt_quiz')} style={{ fontSize: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
                <span>Attempt a Quiz</span></button></li></li>
              <li><button onClick={handleLogout} style={{ fontSize: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center'}} >
                <span>Logout</span></button></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

  </div>
  </nav>
  </div>
    )
}
export default Navbar