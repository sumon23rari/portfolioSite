/** @jsx jsx */
import { jsx, Container, Flex,Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
//import { Link } from 'react-scroll';
import Logo from 'components/logo';
import Link from 'next/Link'
import LogoDark from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import Home from '../../../public/css/Home.module.css';
import { FaCaretDown } from "react-icons/fa";
import image1 from '../../assets/projects/img1.jpg';
import image2 from '../../assets/projects/img2.jpg';
import image3 from '../../assets/projects/img3.png';
import image4 from '../../assets/projects/img4.jpg';
import image5 from '../../assets/projects/img5.jpg';
import image6 from '../../assets/projects/img6.jpg';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            <li class={Home.listd}><Link href='/'>Home</Link></li>
          <li class={Home.dropdown}>
    <span class={Home.dropbtn}>projects 
      <FaCaretDown  className={Home.caretdown}></FaCaretDown>
  
    </span>
    <div class={Home.dropdowncontent}>
      <div class={Home.row}>
        <div class={Home.column}>
       
        <img className={Home.imgd} src={image1}  alt="image1" />
        <img className={Home.imgd}  src={image6} alt="image6" />
        <img className={Home.imgd}  src={image3} alt="image3" />
        <img className={Home.imgd}  src={image4} alt="image4" />
        <img className={Home.imgd}  src={image2} alt="image2" />
        <img className={Home.imgd}  src={image5} alt="image5" />
        <img className={Home.imgd}  src={image3} alt="image3" />
        <img className={Home.imgd}  src={image6} alt="image6" />
        <img className={Home.imgd}  src={image2} alt="image2" />
        </div>
      </div>
    </div>
  </li>
  <li class={Home.listd}><Link href='/Blogs/Blogs' class={Home.linkd}>blogs</Link> </li>
  <li class={Home.listd}> <Link href='/Features/Features' class={Home.linkd}>Features</Link></li>
  <li class={Home.listd}> <Link href='/Testimonial/Testimonial' class={Home.linkd}>Testimonial</Link></li>
  <li class={Home.listd}> <Link href='/Pricing/Pricing' class={Home.linkd}>Pricing</Link></li>
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
          >
            Get Started
          </Button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    pt: 2,
    pb:6,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    
      'nev > a': {
        color: 'red',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      textDecoration: 'none',
      color:'#000',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
