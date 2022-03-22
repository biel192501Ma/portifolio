import { Box, Container, Title } from "../CSS/Global";

import manjump from '../Assets/manjump.png'


const Hero =()=> {
 return (
  <Container>
      <Box className="boxhero" paddingTop={10} row justify="space-around">
          <Box  data-aos="fade-right" data-aos-du>
              <img src={manjump} />
          </Box>
          <Box data-aos="fade-left" className="boxtitlehero">
              <Title size={45} bold >Hi , how are you ?</Title>
              <Title top={7} size={45} bold >i’m <span className="spantitle">Gabriel Carvalho</span> </Title>
              <Title top={10} size={45} bold > <span className="spantitle">Developer</span> </Title>
          </Box>

      </Box>
      
  </Container>
 );
}

export default Hero;