import { Container, Box, Title } from "../CSS/Global";

import maninphone from '../Assets/maninphone.png'

import Ok from '../Assets/Ok.png'


const Aboutme =()=> {
 return (
  <Container>
      <Box className="boxaboutme" paddingTop={15} row  justify="space-between">
         <Box  data-aos="fade-right" top={-5} className="boxtitleaboutme">
             <Title bold size={40} >Know Who <span className="spantitle">I'M</span></Title>
             <Title top={5} className="titlenth2aboutme" width={65}>Hello everyone, I'm Gabriel Carvalho from São Paulo, Brazil. I'm a front end developer with ReactJS & React Native.</Title>
              <Title top={5}>Besides coding, some other activities I love to do!</Title>
              <Box >
                  <Box  data-aos="fade-left"  row  top={10}>
                      <img src={Ok}/>
                      <Title left={5}> Playing games</Title>
                  </Box>

                  <Box data-aos="fade-left" data-aos-delay={200} row  top={5}>
                      <img src={Ok}/>
                      <Title left={5}>Read books</Title>
                  </Box>

                  <Box data-aos="fade-left" data-aos-delay={300} row  top={5}>
                      <img src={Ok}/>
                      <Title left={5}>Play an instrument</Title>
                  </Box>
              </Box>
              <Box left={20} >
                <Title top={3} size={25}>“ slowly but forward! ”</Title>
                <Title left={10} size={25}>-Gabriel</Title>
              </Box>
         </Box>
         <Box  data-aos="fade-up">
             <img src={maninphone} className="maninphone" />
         </Box>
      </Box>
  </Container>
 );
}

export default Aboutme;