import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import Blog from '../../../public/css/Blogs.module.css';
import theme from 'theme';
import Header from 'components/header/header';
import Sticky from 'react-stickynode';
import Footer from 'components/footer/footer';
import KeyFeature from 'sections/key-feature';
import Feature from 'sections/feature';
import CoreFeature from 'sections/core-feature';
const Features = () => {
    const [isSticky, setIsSticky] = useState(false);
    const handleStateChange = (status) => {
      if (status.status === Sticky.STATUS_FIXED) {
        setIsSticky(true);
      } else if (status.status === Sticky.STATUS_ORIGINAL) {
        setIsSticky(false);
      }
    };
    return (
        <ThemeProvider theme={theme}>
   
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
         <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
       </Sticky>
  
      <KeyFeature></KeyFeature>
      <Feature></Feature>
      <CoreFeature></CoreFeature>
           <Footer></Footer>
       
     </ThemeProvider>
    );
};

export default Features;