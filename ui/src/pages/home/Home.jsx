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
        </Container>
      
      
    </>
  );
}
export default Home