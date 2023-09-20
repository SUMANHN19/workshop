import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from './components/signup';
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgotPassword />} />
        <Route path="/signup.js" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
     </BrowserRouter>
    
    )
  }

export default App;
