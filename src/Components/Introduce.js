import { Container ,Box, Title } from "../CSS/Global";

import manintroduce from '../Assets/manintroduce.png'

import github from '../Assets/github.png'
import instagram from '../Assets/instagram.png'
import linkedin from '../Assets/linkedin.png'

const Introduce =()=> {
 return (
  <Container>
        <Box className="boxintroduce" paddingTop={20} row justify="space-around">
          <Box data-aos="fade-up" className="titleintroduce" width={60}>
              <Title size={45} bold >let me <span  className="spantitle" >introduce</span> myself</Title>
              <Title top={10} size={30}  > I delved into programming in 2021, <br/> <br/> using the classics: <span className="spantitle bold">html</span> , <span className="spantitle bold">css</span>  and  <span className="spantitle bold">javascript</span> where I am constantly evolving. </Title>
              <Title top={5} size={30}  > My areas of personal interest are web & mobile development and UI/UX. </Title>
          </Box>
          <Box  data-aos="fade-up" left={3}>
              <img src={ manintroduce} className="manintroduce" />
          </Box>
            

      </Box>
            <Box paddingTop={20} >
             <Title text="center" size={45} bold>FIND ME ON</Title>
             <Title top={2} text="center" bold size={35}>Feel free to connect with me</Title>
             <Box row justify="center" top={2}>
                <Box cursor>
                    <img src={github}/>
                </Box>
                <Box cursor left={5}>
                    <img src={linkedin}/>
                </Box>
                <Box cursor left={5}>
                    <img src={instagram}/>
                </Box>
             </Box>
            </Box>
  </Container>
 );
}

export default Introduce;