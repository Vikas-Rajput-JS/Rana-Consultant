import { useEffect } from "react";
import ApiClient from "./Apis/ApiClient";
import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import { ToastBar, Toaster } from "react-hot-toast";
import Signup from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Carriers from "./Pages/Careers";
import NotFound from "./Pages/404Page";
import ToDoList from "./Pages/ToDoList";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Team from "./Pages/Team/Team";
import HowWeWork from "./Pages/HowWeWork";
import HomePage from "./Pages/HomePage/HomePage";
import Aboutus from "./Pages/AboutUs/Aboutus";
import Stats from "./Pages/Stats/Stats";
import Faq from "./Pages/FAQ/Faq";
import Services from "./Pages/Services/Services";
import Review from "./Pages/Reviews/Review";
import FollowUs from "./Pages/SocialMedia/FollowUs";
import Form from "./Pages/FormLayout/Form";
import Payment from "./Pages/PaymentForm/Payment";
import Billing from "./Pages/PaymentForm/Billing";
import Cookies from "./Pages/Cookies/Cookies";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Profile from "./Pages/Profile/html";
import ForgotPassword from "./Pages/ForgetPassword//index";
import OTPVerify from "./Pages/ForgetPassword/OTP";
import ResetPassword from "./Pages/ForgetPassword/ResetPassword";
import ViewPage from "./Pages/Services/ViewPage";

function Layout() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Feature />
      <HowWeWork />
      <About />
      <Pricing />
      {/* <Cookies /> */}
      <Stats />
      <Newsletter />
      <Testimonials />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

function App() {
  const GetProfile = () => {
    ApiClient.get("profile").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}></Route>

        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
        <Route path={"/about-us"} element={<Aboutus />}></Route>
        <Route path={"/services"} element={<Services />}></Route>
        <Route path={"/course/:id"} element={<ViewPage />}></Route>
        <Route path={"/review"} element={<Review />}></Route>
        <Route path={"/follow-us"} element={<FollowUs />}></Route>
        <Route path={"/edit-profile"} element={<Form />}></Route>
        <Route path={"/contact-us"} element={<ContactUs />}></Route>
        <Route path={"/payment/:id"} element={<Payment />}></Route>
        <Route path={"/billing"} element={<Billing />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
        <Route path={"/forgot-password"} element={<ForgotPassword />}></Route>
        <Route path={"/otp-verify"} element={<OTPVerify />}></Route>
        <Route path={"/reset-password"} element={<ResetPassword />}></Route>

        <Route path={"/todo"} element={<ToDoList />}></Route>
        <Route path={"/carriers"} element={<Carriers />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
