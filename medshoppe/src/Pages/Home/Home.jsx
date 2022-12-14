import { Box } from '@chakra-ui/react';
import React from 'react'
import { Home } from '../../components/SahilComponents/homePages/Home';
import Navbar from '../../components/SahilComponents/Navbar';
import Footer from '../../components/SahilComponents/Footer/Footer';
const Homepage = () => {
  return (
    <Box pos={"relative"}>
        <Navbar/>
      <Home/>
      <Footer/>
    </Box>
  )
}

export default Homepage
