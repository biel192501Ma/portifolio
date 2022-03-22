import { Container, Box, Title } from "../CSS/Global";


import js from '../Assets/JS.png'
import css from '../Assets/CSS.png'
import html from '../Assets/Html.png'
import react from '../Assets/React.png'
import vs from '../Assets/vs.png'
import figma from '../Assets/Figma.png'

const CardSkill =({setimg})=> {
 return (
  <Box className="boxskillcard" row justify="center">
   <img src={setimg=="js" ? js : setimg=="css" ? css : setimg=="html" ? html : setimg=="react" ? react :  setimg=="vs" ? vs : setimg=="figma" ? figma : ''} className="imgskill" />
  </Box>
 );
}

export default CardSkill;