
import './App.css';
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LogIn from "./Pages/login/login.jsx"
import SignUp from "./Pages/signup/signup.jsx"
import Choose from "./Pages/choose/choose.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LogIn/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/selection' element={<Choose/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
