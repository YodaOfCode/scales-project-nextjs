/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function ProductCard({
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

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  img: {
    width: '60%',
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};