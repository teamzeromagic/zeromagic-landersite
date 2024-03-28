import Content from "../components/content";
import { Content2, Content3, Content4, Content5, Comparison, Steps } from "../components/content2";
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
       <Content3 /> 
       <Content5 /> 
       <Partner />
       <Help />
       <Content2 /> 
        </>
    );
}

export default HomePage;