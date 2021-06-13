/** @jsx jsx */
import {jsx, Box, Container, Text} from 'theme-ui';
import {Link} from 'react-scroll';
import data from './footer.data';
import Logo from 'components/logo/logo';
import LogoMain from 'assets/logo.svg';
import {styles} from './styles';

export default function Footer() {
    return (
        <footer sx={styles.footer}>
            <Container>
                <Box sx={styles.footer.footerBottomArea}>
                    <Logo path='/' sx={styles.footer.footerBottomArea.logo} src={LogoMain} alt='Logo'/>
                    <Box sx={styles.footer.menus}>
                        <nav>
                            {data.menuItems.map((menuItem, index) => (
                                <Link key={index}
                                      label={menuItem.label}
                                      sx={styles.footer.link}
                                      activeClass='active'
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                      to={menuItem.path}
                                >
                                    {menuItem.label}
                                </Link>
                            ))}
                        </nav>
                    </Box>
                    <Text sx={styles.footer.copyright}>Copyright by {new Date().getFullYear()} BabyHealth</Text>
                </Box>
            </Container>
        </footer>
    );
}
