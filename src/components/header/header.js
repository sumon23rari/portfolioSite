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
    <span  className={Home.caretdown}>   <FaCaretDown></FaCaretDown></span>
  
    </span>
    <div class={Home.dropdowncontent}>
      <div class={Home.row}>
        <div class={Home.column}>
       
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class={Home.column}>
          
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class={Home.column}>
        
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
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
