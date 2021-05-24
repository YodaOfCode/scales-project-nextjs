/** @jsx jsx */
import {jsx, Image, Box, Heading, Text} from 'theme-ui';
import {styles} from './styles';

export default function FeatureCardColumn({
                                              src,
                                              altText = 'default alt text',
                                              title,
                                              text,
                                          }) {
    return (
        <Box sx={styles.card}>
            <Image src={src} altText={altText} sx={styles.img}/>
            <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{text}</Text>
            </Box>
        </Box>
    );
}



