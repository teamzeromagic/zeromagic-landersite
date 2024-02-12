import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Header } from './components/header';
import { Hero } from './components/hero';
import Pitch from './components/pitch';
import Feature from './components/feature';
import Footer from './components/footer';
import Content from './components/content';
function App() {
 
  return (
    <div className="App">

      
       <Navbar />
       <Header /> 
       <Hero />
       <Pitch />
       <Feature />
       <Content />
       <Footer />
       
    </div>
  );
}

export default App;
