/** @jsx jsx */
import {jsx, Container, Box, Image} from 'theme-ui';
import TextFeature from 'components/text-feature';

import RemindThumb from 'assets/reminder.png';
import shapePattern from 'assets/shape-pattern2.png';

import {data} from './data';
import {styles} from './styles';

export default function Reminder() {
    return (
        <section sx={{variant: 'section.coreFeature'}}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <TextFeature
                        subTitle={data.subTitle}
                        title={data.title}
                        description={data.description}
                        btnName={data.btnName}
                        btnURL={data.btnURL}
                    />
                </Box>
                <Box sx={styles.thumbnail}>
                    <Image src={RemindThumb} alt='Thumbnail'/>
                    <Box sx={styles.shapeBox}>
                        <Image src={shapePattern} alt='Shape'/>
                    </Box>
                </Box>
            </Container>
        </section>
    );
}


