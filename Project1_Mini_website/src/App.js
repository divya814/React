/* Add-> <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    
    to public/ndex.html */

import React from 'react';
import NavBar from "./Navbar"
import HeroSection from "./HeroSection"
import AppSection from "./AppSection"
import CardSection from "./CardSection"
import Footer from './Footer';

const App = () =>{
    return(
        <div>            
            <NavBar/>
            <HeroSection></HeroSection>
            <AppSection></AppSection>
            <CardSection></CardSection>
           
            <Footer></Footer>


        </div>
    )
}
export default App
