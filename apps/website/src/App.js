import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';  
import NavbarExample from './components/navbar-menu';

function App() {
 
  return (
    <>
       {/* <Navbar /> */}
       <NavbarExample />
     <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contact/" element={<Contact />} />  

        {/* <Route path="/docs" component={() => {
          window.location.href = '/docs/index.html';
          return null;
        }} /> */}
     
     </Routes>
     </BrowserRouter>
     <Footer />

     </>
  );
}

export default App;
