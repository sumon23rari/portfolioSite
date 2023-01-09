import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaCaretDown } from "react-icons/fa";
import Link from 'next/Link';
import Home from '../../../public/css/Home.module.css';
import image1 from '../../assets/projects/img1.jpg';
import image2 from '../../assets/projects/img2.jpg';
import image3 from '../../assets/projects/img3.png';
import image4 from '../../assets/projects/img4.jpg';
import image5 from '../../assets/projects/img5.jpg';
import image6 from '../../assets/projects/img6.jpg';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

const projectItem = [
  {
    path: '/',
    imgs: image1
  },
  {
    path: '/',
    imgs: image2
  },
  {
    path: '/',
    imgs: image3
  },
  {
    path: '/',
    imgs: image4
  },
  {
    path: '/',
    imgs: image5
  },
  {
    path: '/',
    imgs: image6
  },
]
const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);



  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            <li class={Home.listd}><Link sx={styles.linkds} href='/'>Home</Link></li>
            <li class={Home.dropdown}>
              <span class={Home.dropbtn}>projects
                <span className={Home.caretdown}>   <FaCaretDown></FaCaretDown></span>
              </span>
              <div class={Home.resdropdowncontent}>
                <div class={Home.row}>
                  <div sx={styles.pro}>


                    {
                      projectItem.map(({ path, imgs }, i) => (
                        <Box>
                          <Link href={path} key={i}><img className={Home.imgmobile} src={imgs} alt="" /></Link>
                        </Box>
                      ))
                    }


                  </div>

                </div>
              </div>
            </li>
            <li class={Home.listd}><Link href='/Blogs/Blogs' sx={styles.linkds}>blogs</Link> </li>
            <li class={Home.listd}><Link href='/Features/Features' sx={styles.linkds}>Features</Link></li>
            <li class={Home.listd}> <Link href='/Testimonial/Testimonial' sx={styles.linkds}>Testimonial</Link></li>
            <li class={Home.listd}><Link href='/Pricing/Pricing' sx={styles.linkds}>Pricing</Link></li>
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  {/* <Link to={path}>{icon}</Link> */}
                  <a href={path}>{icon}</a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#222',
      py: '15px',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },
  linkds: {
    textDecoration: "none",
    color: 'red'
  },
  column: {
    width: '100%',
    border: "none"
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
