import { Container, Box, Title } from "../CSS/Global";

import GitHubicon from '../Assets/GitHubicon.png'
import LinkedInicon from '../Assets/LinkedInicon.png'
import Instagramicon from '../Assets/Instagramicon.png'

const Footer =()=> {
 return (
  <Box color="white" height={60} top={10}>
      <Container>

      <Box className="boxfooter" row justify="space-between" >
        <Box paddingTop={2}>
            <Title color="secondary" size={22}  > Coded by Gabriel</Title>
        </Box>

        <Box paddingTop={2}>
            <Title color="secondary" size={22}  > Copyright © 2022 WT</Title>
        </Box>

        <Box className="boximgfooter" paddingTop={2} row>
            <Box>
                <img src={GitHubicon}/>
            </Box>

            <Box left={7}>
                <img src={LinkedInicon}/>
            </Box>

            <Box left={7}>
                <img src={Instagramicon}/>
            </Box>
        </Box>
        
      </Box>
      
      </Container>
  </Box>
 );
}

export default Footer;