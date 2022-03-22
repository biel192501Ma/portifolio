import { Container, Box, Title } from "../CSS/Global";
import CardSkill from "./CardsSkills";


const Skills =()=> {
 return (
  <Container>
      <Title top={15} bold text="center" size={40}> Professional <span className="spantitle">Skillset</span></Title>

      <Box data-aos="fade-up" className="boxskills" top={10} row justify="space-between">
       <CardSkill  setimg={"js"}/>
       <CardSkill setimg={"html"}/>
       <CardSkill class="skill"  setimg={"css"}/>
       <CardSkill setimg={"react"}/>
      </Box>

      <Title top={15} bold text="center" size={40}> <span className="spantitle">Tools</span>  I use</Title>
     
      <Box data-aos="fade-up"  className="boxtools" top={10} row justify="space-around">
       <CardSkill  setimg={"vs"}/>
       <CardSkill setimg={"figma"}/>
      
      </Box>
  </Container>
 );
}

export default Skills;