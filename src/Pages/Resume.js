import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import { Container, Box, Title } from "../CSS/Global";

import download from '../Assets/Download.png'
import CV from '../Assets/CV.png'
const Resume =()=> {
 return (
  <Box color="primery">
      <Menu/>
        <Box  data-aos="fade-up" top={20}row justify="center">
            <Box onClick={()=> window.location.href="https://drive.google.com/u/0/uc?id=1SeS0dhD557QOm_mDvWPbErywMeho4BpX&export=download"} row className="boxdownload">
                <img src={download} />
                 <Title bold color="white"> Dowload cv</Title>
            </Box>

        </Box>
        <Box top={10} row justify="center">
            <Box>
                <img src={CV} className="cv" />
            </Box>

            
        </Box>

        <Box  data-aos="fade-up"  top={10}row justify="center">
            <Box  onClick={()=> window.location.href="https://drive.google.com/u/0/uc?id=1SeS0dhD557QOm_mDvWPbErywMeho4BpX&export=download"} row className="boxdownload">
                <img src={download} />
                 <Title bold color="white"> Dowload cv</Title>
            </Box>

        </Box>

      <Footer/>
  </Box>
 );
}

export default Resume;