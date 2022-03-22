import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import Skills from "../Components/Skills";
import { Box, Title } from "../CSS/Global";

 const About = ()=>  {
    return (
      <Box  color="primary"  >
          <Menu/>
          <Aboutme/>
          <Skills/>
       <Footer/>
      </Box>
     
   
    );
   }
   
   export default About;