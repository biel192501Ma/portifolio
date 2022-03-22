import { Container, Box, Title } from "../CSS/Global";
import WorkCard from "./WorkCards";

import Loader from '../Assets/Loader.png'

const Works =()=> {
 return (
  <Container>
      <Title top={20} text="center" bold size={40}>My Recent <span className="spantitle" >Works</span> </Title>

      <Box  data-aos="fade-up"  className="boxworkcard" top={10} row justify="space-around" >
       <WorkCard 
        setimg="landinpage"
       title={"Lading-page"}
        tools="#react , #html, #css"
       />
       <WorkCard 
            setimg="website"
       title={"web-site"}
       tools="#react , #html, #css"
       />
       <WorkCard 
            setimg="dashboard"
       title={"dashboard"}
       tools="#react , #js, #css"
       />
       
      </Box>

      <Title  top={20} text="center"  size={40} >more projects coming soon</Title>

      <Box top={10} row justify="center">
          <img src={Loader} className="loader" />
      </Box>
  </Container>
 );
}

export default Works;