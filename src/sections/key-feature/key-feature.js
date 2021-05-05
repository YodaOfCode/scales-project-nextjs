/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid} from 'theme-ui';
import SectionHeader from '../../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

import {styles} from "./styles";
import {data} from "./data";

export default function KeyFeature() {
    return (
        <section sx={{variant: 'section.keyFeature'}} id='feature'>
            <Container>
                <SectionHeader
                    slogan='Вам не треба нікуди їхати чи йти'
                    title='Ми доставимо ваги прямо до вашого дому абсолютно безкоштовно'
                />
                <Grid sx={styles.grid}>
                    {data.map((item, index) => (
                        <FeatureCardColumn
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}


