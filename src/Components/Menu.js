import { useState } from "react";
import { Box, Title } from "../CSS/Global";

import menumobile from '../Assets/menumobile.png'

const Menu =()=> {
    const [openmenu,setOpenmenu] = useState(false);

const sendhome =()=> {
    
    window.location.href="/"

}
 return (
  <Box color="white" height={60}>
      <Box className="boxmenumobile">
          <img onClick={()=> setOpenmenu(!openmenu , console.log(openmenu))} src={menumobile} className="menumobile" />
      </Box>
      <Box  className={openmenu==true ? 'menutoggle' :'menutogglehiddem'} >
             <Title cursor  onClick={ sendhome }  bold size={23} color="secondary" >Home</Title>
             <Title top={5} cursor onClick={()=> window.location.href="/about"} bold size={23}  color="secondary" >About</Title>
             <Title top={5}  cursor onClick={()=> window.location.href="/project"} bold size={23}  color="secondary" >Project</Title>
             <Title top={5}  cursor onClick={()=> window.location.href="/resume"} bold size={23}  color="secondary" >Resume</Title>

      </Box>
      <Box className="boxmenu" paddingTop={1} left={5} right={5} row justify="space-between">
         <Box>
             <Title bold size={23} color="secondary" >Gabriel</Title>
         </Box>

         <Box  row >
             <Title cursor  onClick={()=> window.location.href="/"} left={-20} bold size={23} color="secondary" >Home</Title>
             <Title cursor onClick={()=> window.location.href="/about"} bold size={23} paddingleft={5} color="secondary" >About</Title>
             <Title cursor onClick={()=> window.location.href="/project"} bold size={23} paddingleft={5} color="secondary" >Project</Title>
             <Title cursor onClick={()=> window.location.href="/resume"} bold size={23} paddingleft={5} color="secondary" >Resume</Title>

             <Box left={10}  className="boxcontact" >

             <Title bold size={23}  color="white" >Contact</Title>
             </Box>
         </Box>
         
      </Box>
  </Box>
 );
}

export default Menu;