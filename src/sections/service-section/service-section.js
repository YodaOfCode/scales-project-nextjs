/** @jsx jsx */
import React, {useState} from 'react';
import {jsx, Container, Box, Grid, Text, Heading, Button, Image} from 'theme-ui';

import TextFeature from 'components/text-feature/text-feature';
import ModalVideo from 'react-modal-video';
import {IoIosPlay} from 'react-icons/io';

import ServiceThumb from 'assets/service-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';

import {data} from "./data";
import {styles} from "./styles";


export default function ServiceSection() {
    const [videoOpen, setVideoOpen] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()

        setVideoOpen(true)
    }

    return (
        <section sx={{variant: 'section.services'}}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.thumbnail}>
                    <Image src={ServiceThumb} alt='Thumbnail'/>
                    <Button
                        sx={styles.videoBtn}
                        onClick={handleClick}
                        aria-label='Play Button'
                    >
                        <span>
                            <IoIosPlay/>
                        </span>
                    </Button>
                    <Box sx={styles.shapeBox}>
                        <Image src={shapePattern} alt='shape'/>
                    </Box>
                </Box>
                <Box sx={styles.contentBox}>
                    <TextFeature subTitle={data.subTitle} title={data.title}/>

                    <Grid sx={styles.grid}>
                        {data.features.map((feature) => (
                            <Box sx={styles.card} key={feature.id}>
                                <Image src={feature.imgSrc} alt={feature.altText} sx={styles.icon}/>
                                <Box sx={styles.wrapper}>
                                    <Heading sx={styles.wrapper.title}>{feature.title}</Heading>
                                    <Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <ModalVideo
                channel='youtube'
                isOpen={videoOpen}
                videoId='yopNRmvr6Hk'
                onClose={() => setVideoOpen(false)}
            />
        </section>
    );
}




