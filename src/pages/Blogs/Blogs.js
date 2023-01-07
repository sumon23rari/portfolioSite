import Header from 'components/header/header';
import Blog from '../../../public/css/Blogs.module.css';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import BlogSection from 'sections/blog-section';
import Footer from 'components/footer/footer';
function Blogs() {
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
 <div  style={{paddingTop:'8%',paddingBottom:'7%'}}> </div>
      <BlogSection></BlogSection>
          <Footer></Footer>
      
    </ThemeProvider>
       
            
          
      
    );
}

export default Blogs;