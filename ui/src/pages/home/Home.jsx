import React  from "react";
import { motion } from 'framer-motion'
import {Header} from "../../components";
import SocialIcons from "../../subComponents/SocialIcons";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import "./home.css";



const Container = styled.div`
padding: 0.5rem;
`
const ABOUT = styled(NavLink)`
text-decoration: none;
color:black;
position: fixed;
top: 85%;
left: 30%;
font-size:22px;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: black;
text-decoration: none;
position: fixed;
top: 85%;
left: 60%;
font-size:22px;
z-index:1;
`
const BLOG = styled(NavLink)`
color: black;
position: fixed;
top: 60%;
right: calc(2.2rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
font-size:22px;
z-index:1;
`

function Home() {

  
  
  return (
    <>
     
        <Container>
          <Header />
          <SocialIcons/>
          <ABOUT to="/about" >
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/projects">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Projects.
                </motion.h2>
            </SKILLS>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>
        </Container>
      
      
    </>
  );
}
export default Home