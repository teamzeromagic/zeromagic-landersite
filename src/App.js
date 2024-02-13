import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomePage from './pages/homepage';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
 
  return (
    <>
       <Navbar />
     <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
     <Footer />

     </>
  );
}

export default App;
