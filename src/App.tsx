import { Suspense, lazy } from "react";
// import 'react-responsive-modal/styles.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./Components/GlobalComponents/Error404";
import FloatingWhatsAppButton from "./Components/GlobalComponents/FloatingWhatsAppButton";
import Footer from "./Components/GlobalComponents/Footer";
import Loader from "./Components/GlobalComponents/Loader";
import Navbar from "./Components/GlobalComponents/Navbar";
import "./fonts.css";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const Blogspage = lazy(() => import("./Pages/Blogs.tsx"));
const BlogPage = lazy(() => import("./Pages/BlogPage.tsx"));
const CompaniesPage = lazy(() => import("./Pages/CompaniesPage.tsx"));
const EnquiryPage = lazy(() => import("./Pages/EnquirePage.tsx"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/blog/:id/:title" element={<BlogPage />} />
          <Route path="/blogs/:category" element={<Blogspage />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Routes>
      </Suspense>
      <FloatingWhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
