import Login from "./components_login/login_main";
import Home from "./components_home/home";
import User from "./user/user_profile";
import About from "./components_about_us/about_us";
import UserAttempt from "./user/user_attempted";
import Register from "./components_login/register_main";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TriviaSelectForm from "./Quiz_components/TriviaSelectForm";
import CreateQuiz from "./user/user_create_quiz";
import Personal_Quiz from "./Quiz_components/personal_quiz";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user_profile" element={<User/>} />
        <Route path="/user_create_quiz" element={<CreateQuiz/>} />
        <Route path="/attempt_quiz" element={<TriviaSelectForm/>} />
        <Route path="/user_attempt_quiz" element={<UserAttempt/>} />
        <Route path="/quiz" element={<TriviaSelectForm />} />
        <Route path="/personal_quiz" element={<Personal_Quiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App