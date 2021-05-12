/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid, Box, Heading, Text} from 'theme-ui';
import SectionHeader from 'components/section-header';

import {data} from "./data";
import {styles} from "./styles";

export default function WorkFlow() {
    return (
        <section sx={styles.workflow}>
            <Container>
                <SectionHeader
                    slogan='Як працює прокат вагів?'
                    title='Вам потрібно зробити всього 4 кроки'
                    isWhite={true}
                />
                <Grid sx={styles.grid}>
                    {data.map((item, index) => (
                        <Box sx={styles.card} key={item.id}>
                            <Box sx={styles.iconBox}>
                                {`0${item.id}`}
                            </Box>
                            <Box sx={styles.wrapper}>
                                <Heading sx={styles.wrapper.title}>
                                    {item.title}
                                </Heading>
                                <Text sx={styles.wrapper.subTitle}>
                                    {item.text}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}


