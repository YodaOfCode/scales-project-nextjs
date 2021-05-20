/** @jsx jsx */
import {jsx, Box, Container, Image, Text} from 'theme-ui';
import {Link} from 'react-scroll';
import data from './footer.data';
import Logo from 'components/logo';
import LogoMain from 'assets/logo.svg'

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

const styles = {
    footer: {
        footerBottomArea: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderTop: '1px solid',
            borderTopColor: 'border_color',
            pt: [7, null, 8],
            pb: ['40px', null, '100px'],
            textAlign: 'center',
            logo: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '@media screen and (max-width: 620px)': {
                    width: '100%',
                    height: '200px',
                }
            },
        },
        menus: {
            mt: [3, 4],
            mb: 2,
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
        },

        link: {
            fontSize: [1, '15px'],
            color: 'text',
            fontWeight: '400',
            mb: 2,
            cursor: 'pointer',
            transition: 'all 0.35s',
            display: 'block',
            textDecoration: 'none',
            lineHeight: [1.5, null, 1.8],
            px: [2, null, 4],
            ':hover': {
                color: 'primary',
            },
        },
        copyright: {
            fontSize: [1, '15px'],
            width: '100%',
        },
    },
};
