import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Contact from './pages/contact'; 
import Footer from './components/footer';  
import NavbarExample from './components/navbar-menu';
import { useState } from 'react';

function App() {
 
  const [email , setEmail] = useState();

  return (
    <> 
       <NavbarExample />
     <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/contact/" element={<Contact />} />   */}

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
