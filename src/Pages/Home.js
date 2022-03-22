import { Box, Title } from "../CSS/Global";
import Menu from "../Components/Menu";
import Hero from "../Components/Hero";
import Introduce from "../Components/Introduce";
import Footer from "../Components/Footer";


 const Home = ()=>  {
 return (
   <Box  color="primary"  >
     <Menu/>
     <Hero/>
     <Introduce/>
     <Footer/>
   </Box>
  

 );
}

export default Home;