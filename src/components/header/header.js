/** @jsx jsx */
import {jsx, Container, Flex, Button, Box} from 'theme-ui';
import {Link} from 'react-scroll';
import Logo from 'components/logo/logo';
import LogoMain from 'assets/logo.svg';
import MobileDrawer from '../mobile-drawer/mobile-drawer';
import {menuItems} from './header.data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {styles} from './styles';

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




