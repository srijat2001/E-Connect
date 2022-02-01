import logo from './logo.svg';
import './App.css';
import Index from './Components/MainPage/index';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from './Components/SignUp/signup';
import SignIn from './Components/SignIn/signin';
import Home from './Components/HomePage/home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
