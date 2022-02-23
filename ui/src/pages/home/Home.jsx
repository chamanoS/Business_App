import React  from "react";
import { motion } from 'framer-motion'
import {Header} from "../../components";
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
top: 75%;
left: 30%;
z-index:1;
`
const PROJECTS = styled(NavLink)`
color: black;
text-decoration: none;
position: fixed;
top: 75%;
left: 60%;
z-index:1;
`
const BLOG = styled(NavLink)`
color: black;

position: absolute;
top: 50%;
left: calc(1rem + 10vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`
const SERVICE = styled(NavLink)`
color: black;
position: fixed;
top: 50%;
right: calc(2.2rem + 10vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

function Home() {

  
  
  return (
    <>
     
        <Container>
          <Header />
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
            
            <PROJECTS to="/projects">
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
                    Blog.
                </motion.h2>
            </PROJECTS>
            <SERVICE to="/tutoring" >
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
                    Service.
                </motion.h2>
            </SERVICE>
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
                    Projects.
                </motion.h2>
            </BLOG>
        </Container>
      
      
    </>
  );
}
export default Home