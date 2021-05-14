/** @jsx jsx */
import {jsx, Container, Flex, Button, Box, IconButton} from 'theme-ui';
import {keyframes} from '@emotion/core';
import {Link} from 'react-scroll';
import Logo from 'components/logo';
import LogoMain from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import {menuItems} from './header.data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";

export default function Header({className}) {
    return (
        <header sx={styles.header} className={className} id='header'>
            <Container sx={styles.container}>
                <Logo sx={styles.logo} src={LogoMain}/>
                <Flex as='nav' sx={styles.nav}>
                    {menuItems.map((menuItem, index) => (
                        <Link
                            activeClass='active'
                            to={menuItem.path}
                            spy={true}
                            smooth={true}
                            duration={500}
                            key={index}
                            offset={menuItem.path === 'products'
                                ? -150
                                : -50
                            }
                        >
                            {menuItem.label}
                        </Link>
                    ))}
                </Flex>

                <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <a href="tel:+380935386595">
                        <Button variant='primary' sx={styles.button}>
                            <Box>
                                <small sx={styles.contacts__info}>Контакти:</small>
                            </Box>
                            <Box>
                                <span sx={styles.contacts__info}>+380935386595</span>
                            </Box>
                        </Button>
                    </a>
                    <Flex sx={{marginTop: '5px', alignItems: 'center'}}>
                        <Box>
                            <a target='_blank' href='https://t.me/MaksymZharchenko'>
                                <FontAwesomeIcon sx={{margin: '0 2px', color: '#0088cc'}} icon={faTelegram} size='2x'/>
                            </a>
                        </Box>
                        <Box>
                            <a target='_blank' href="viber://chat?number=%2B380935386595">
                                <FontAwesomeIcon sx={{margin: '0 2px', color: '#665CAC'}} icon={faInstagram} size='2x'/>
                            </a>
                        </Box>
                        <Box>
                            <a target='_blank' href="viber://chat?number=%2B380935386595">
                                <FontAwesomeIcon sx={{margin: '0 2px', color: '#3f729b'}} icon={faViber} size='2x'/>
                            </a>
                        </Box>
                    </Flex>
                </Flex>
                <MobileDrawer/>
            </Container>
        </header>
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
        py: 4,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        transition: 'all 0.4s ease',
        animation: `${positionAnim} 0.4s ease`,
        '.donate__btn': {
            flexShrink: 0,
            mr: [15, 20, null, null, 0],
            ml: ['auto', null, null, null, 0],
        },
        '&.sticky': {
            position: 'fixed',
            backgroundColor: 'background',
            color: '#000000',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
            py: 3,
            'nev > a': {
                color: 'text',
            },
        },
    },
    button: {

        '@media screen and (max-width: 520px)': {
            minWidth: '100px',
            padding: '5px',
        },

    },
    contacts__info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: 'white',
        textDecoration: 'none',
        '@media screen and (max-width: 520px)': {
            fontSize: '10px',
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
            fontSize: 2,
            fontWeight: 'body',
            px: 5,
            cursor: 'pointer',
            lineHeight: '1.2',
            transition: 'all 0.15s',
            '&:hover': {
                color: 'primary',
            },
            '&.active': {
                color: 'primary',
            },
        },
    },
};
