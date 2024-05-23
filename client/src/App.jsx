import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SearchCourse from "./pages/SearchCourse";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import ViewCourse from "./pages/ViewCourse";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/search-course" element={<SearchCourse />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/view-course" element={<ViewCourse />} />
        <Route path="/course-details" element={<CourseDetails />} />
      </Routes>
    </div>
  );
};

export default App;
