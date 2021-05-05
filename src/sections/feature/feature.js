/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

import {data} from './data';
import {styles} from './styles';

export default function Feature() {
    return (
        <section sx={{variant: 'section.feature'}}>
            <Container>
                <SectionHeader
                    slogan='Quality features'
                    title='Amazing using features'
                />
                <Grid sx={styles.grid}>
                    {data.map((item, index) => (
                        <FeatureCard
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            text={item.text}
                        >

                        </FeatureCard>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

