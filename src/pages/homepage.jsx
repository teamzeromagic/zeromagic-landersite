import Content from "../components/content";
import Feature from "../components/feature"; 
import { Header } from "../components/header";
import { Hero } from "../components/hero"; 
import Pitch from "../components/pitch";

const HomePage = () => {
    return (
        <> 
       <Header /> 
       <Hero />
       <Pitch />
       <Feature />
       <Content /> 
        </>
    );
}

export default HomePage;