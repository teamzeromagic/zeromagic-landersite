import Content from "../components/content";
import { Modules, Auth,  Innovation, Comparison, Steps, GraphQL } from "../components/content2";
import Feature from "../components/feature"; 
import { Header } from "../components/header";
import Help from "../components/help";
import { Hero } from "../components/hero"; 
import Partner from "../components/partners";
import Pitch from "../components/pitch";
import  TextBlock  from "../components/textblock";

const HomePage = () => {
    return (
        <> 
       <Header /> 
       <Hero />
       <TextBlock /> 
       <Steps />
       <Comparison />
       <Auth /> 
       <Innovation /> 
       <GraphQL />
       <Partner />
       <Help />
       <Modules /> 
        </>
    );
}

export default HomePage;