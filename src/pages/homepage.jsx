import Content from "../components/content";
import { Modules, Auth,  Innovation, Comparison, Steps, GraphQL, MagicAI } from "../components/content2";
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
       <Auth /> 
       <Innovation /> 
       <GraphQL />
       <MagicAI /> 
       <Partner />
       <TextBlock /> 
       <Steps />
       <Comparison />
       <Help />
       <Modules /> 
        </>
    );
}

export default HomePage;