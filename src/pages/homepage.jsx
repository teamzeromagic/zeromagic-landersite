import Content from "../components/content";
import { Content2, Content3, Content4, Content5 } from "../components/content2";
import Feature from "../components/feature"; 
import { Header } from "../components/header";
import Help from "../components/help";
import { Hero } from "../components/hero"; 
import Pitch from "../components/pitch";
import  TextBlock  from "../components/textblock";

const HomePage = () => {
    return (
        <> 
       <Header /> 
       <Hero />
       <TextBlock />
       {/* <Pitch /> */}
       {/* <Feature /> */}
       <Content4 />
       <Content3 />
       {/* <Content />  */}
       <Content5 />
       <Help />
       <Content2 /> 
        </>
    );
}

export default HomePage;