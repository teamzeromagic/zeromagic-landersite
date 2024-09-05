import Content from "../components/content";
import { Modules, Auth,  Innovation, Comparison, Steps, GraphQL, MagicAI, HomeBanner, ShortCut } from "../components/content2";
import { DemoVideo } from "../components/demovideo";
import Feature from "../components/feature"; 
import { Header } from "../components/header";
import Help from "../components/help";
import { Hero } from "../components/hero"; 
import Partner from "../components/partners"; 
import { StepFeatures } from "../components/stepfeatures";
import  TextBlock  from "../components/textblock";

const HomePage = () => {
    return (
        <> 
       <Header /> 
        {/* <HomeBanner /> */}
       <Hero />
       <TextBlock /> 
       <Steps />
       <StepFeatures />
       <Help />
       <ShortCut />
       <Comparison />
       {/* <Auth /> 
       <Innovation /> 
       <GraphQL />
       <MagicAI />  */}
       <Partner />
       <Modules /> 
       <DemoVideo />
        </>
    );
}

export default HomePage;