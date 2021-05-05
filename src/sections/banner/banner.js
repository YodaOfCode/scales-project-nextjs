/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Box, Heading, Text, Image, Button} from 'theme-ui';
import BannerImg from 'assets/childOnScales.jpg';

import {styles} from './styles'
import {Link} from "react-scroll";

export default function Banner() {
    return (
        <section sx={styles.banner} id='home'>
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}>
                    <Heading as='h1' variant='heroPrimary'>
                        Прокат дитячих вагів
                    </Heading>
                    <Text as='p' variant='heroSecondary'>
                        На нашому сайті, ви можете знайти та взяти напрокат чудові дитячі ваги на будь-який термін
                    </Text>
                    <Link
                        activeClass='active'
                        to='feature'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Button variant='primary'>
                            Детальніше
                        </Button>
                    </Link>
                </Box>
                <Box sx={styles.banner.imageBox}>
                    <Image src={BannerImg} alt='banner' sx={styles.banner.imageBox}/>
                </Box>
            </Container>
        </section>
    );
}

