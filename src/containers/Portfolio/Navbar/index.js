import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';

import { MENU_ITEMS, GITHUB_URL, GITHUB_LABEL } from 'common/data/Portfolio/data';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

import LogoImage from 'common/assets/image/portfolio/logo.png';
import LogoImageAlt from 'common/assets/image/portfolio/logo-alt.png';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar_github_link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#3444f1',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              <Icon icon={github} size={20} />
              <span>{GITHUB_LABEL}</span>
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar_github_link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#3444f1',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  marginTop: '16px',
                }}
              >
                <Icon icon={github} size={20} />
                <span>{GITHUB_LABEL}</span>
              </a>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
