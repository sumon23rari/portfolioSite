import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Blog from '../../../public/css/Blogs.module.css';
import Header from 'components/header/header';
import Sticky from 'react-stickynode';
import TestimonialCard from 'sections/testimonial';
import Footer from 'components/footer/footer';
const Testimonial = () => {
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
  <div className={Blog.uper}> </div>
      <TestimonialCard></TestimonialCard>
           <Footer></Footer>
       
     </ThemeProvider>
    );
};

export default Testimonial;