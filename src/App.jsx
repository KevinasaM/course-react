import{Routes,Route} from 'react-router-dom';


import HomePages from './pages/HomePages';
import KelasPages from './pages/KelasPages';
import TestimonialPages from './pages/TestimonialPages';
import FaqPages from './pages/FaqPages';
import SKPages from './pages/SKPages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
        <Route path='/' Component={HomePages}/>
        <Route path='/Kelas' Component={KelasPages}/>
        <Route path='/Testimonial' Component={TestimonialPages}/>
        <Route path='/Faq' Component={FaqPages}/>
        <Route path='/syaratketen' Component={SKPages}/>
    </Routes>
    {<Footer/>}
  </div>
  );
}
export default App
