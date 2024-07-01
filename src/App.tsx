import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/GlobalComponents/Footer';
import Navbar from './Components/GlobalComponents/Navbar';
import Loader from './Components/GlobalComponents/Loader';
import Error404 from './Components/GlobalComponents/Error404';
import FloatingWhatsAppButton from './Components/GlobalComponents/FloatingWhatsAppButton';

// Lazy load pages
const HomePage = lazy(() => import('./Pages/HomePage'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContactUsPage = lazy(() => import('./Pages/ContactUsPage'));
const ServicePage = lazy(() => import('./Pages/ServicePage'));
const Blogspage = lazy(()=> import('./Pages/Blogs.tsx'));
const BlogPage = lazy(()=> import('./Pages/BlogPage.tsx'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path='/blog/:id/:title' element={<BlogPage/>}/>
          <Route path='/blogs' element={<Blogspage/>}/>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='*' element={<Error404 />} /> 
        </Routes>
      </Suspense>
      <FloatingWhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
