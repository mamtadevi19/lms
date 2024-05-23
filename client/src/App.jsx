import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SearchCourse from "./pages/SearchCourse";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import ViewCourse from "./pages/ViewCourse"

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/searchcourse" element={<SearchCourse/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/verifyotp" element={<VerifyOtp/>} />
        <Route path=" /viewcourse" element={<ViewCourse/>} />

        
        
        
        
        </Routes>
        
        </div>
  );
};

export default App;