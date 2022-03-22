import { Container, Box, Title } from "../CSS/Global";

import landingpage from '../Assets/landingpage.png'
import website from '../Assets/website.svg'
import dashboard from '../Assets/dashboard.png'

const WorkCard =({title, tools, setimg})=> {
 return (
  <Box className="workcard">
      
      <Box >
          <img src={setimg =="landinpage" ? landingpage : setimg=="website" ? website : setimg=="dashboard" ? dashboard :  ''}  className="imgwork" />
      </Box>
      <Title top={5} bold size={25} text="center">{title}</Title>

      <Box className="informcardwork"  row top={10} left={10} justify="space-around">
          <Box cursor className="boxgithub">
              <Title bold size={15}>GitHub</Title>
          </Box>
          <Box className="boxtoolscard">
              <Title size={11}>{tools}</Title>
          </Box>
      </Box>
      
  </Box>
 );
}

export default WorkCard;