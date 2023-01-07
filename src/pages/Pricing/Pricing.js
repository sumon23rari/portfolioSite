import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Package from 'sections/package';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

const Pricing = () => {
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
  <div  style={{paddingTop:'7%'}}> </div>
     <Package></Package>
           <Footer></Footer>
       
     </ThemeProvider>
    );
};

export default Pricing;
