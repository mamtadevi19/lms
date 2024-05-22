import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Catalog from "./pages/Catalog";
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import  Error  from "./pages/Error";
import  ForgotPassword  from "./pages/ForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SearchCourse from " ./pages/SearchCourse";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import ViewCourse from "./pages/ViewCourse";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <div>
      <Routes>

        <Routes path="/" element={<Home />} />
        <Routes path="/about" element={<About />} />
        <Routes path="/catalog" element={<Catalog/>} />
        <Routes path="/contactus" element={<ContactUs/>} />
        <Routes path="/dashboard" element={<DashBoard/>}/>
        <Routes path="*" element={<Error/>} />
        <Routes path="/forgotpassword" element={<ForgotPassword/>} />
        <Routes path="/login" element={<Login/>} />
        <Routes path="/resetpassword" element={<ResetPassword/>} />
        <Routes path="/searchcourse" element={<SearchCourse/>} />
        <Routes path="/signup" element={<SignUp/>} />
        <Routes path="/verifyotp" element={<VerifyOtp/>} />
        <Routes path=" /viewcourse" element={<ViewCourse/>} />

        
        
        
        
        </Routes>
        
        </div>
  )
}

export default App