import React, {useState} from 'react';
import {Box} from 'theme-ui';
import {Scrollbars} from 'react-custom-scrollbars';
import Drawer from 'components/drawer/drawer';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import {Link} from 'react-scroll';
import {menuItems} from '../header/header.data';
import {styles} from './styles';
import {social} from './data'


export default function MobileDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Drawer
            width='320px'
            drawerHandler={
                <Box sx={styles.handler}>
                    <IoMdMenu size='26px'/>
                </Box>
            }
            open={isDrawerOpen}
            toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
            closeButton={<IoMdClose size='24px' color='#000000'/>}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
        >
            <Scrollbars autoHide>
                <Box sx={styles.content}>
                    <Box sx={styles.menu}>
                        {menuItems.map((menuItem, index) => (
                            <Link
                                activeClass='active'
                                to={menuItem.path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                key={index}
                            >
                                {menuItem.label}
                            </Link>
                        ))}
                    </Box>
                    <Box sx={styles.menuFooter}>
                        <Box sx={styles.social}>
                            {social.map((socialItem, index) => (
                                <Box as='span' key={index} sx={styles.social.icon}>
                                    <Link to={socialItem.path}>{socialItem.icon}</Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Scrollbars>
        </Drawer>
    );
};
