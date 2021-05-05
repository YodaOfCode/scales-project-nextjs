/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

import {data} from "./data";
import {styles} from "./styles";

export default function TeamSection() {
    return (
        <section>
            <Container>
                <SectionHeader
                    slogan='Our team'
                    title='Best of the best'
                />

                <Grid sx={styles.grid}>
                    {data.map((item, index) => (
                        <TeamCard
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            designation={item.designation}
                            social={item.socialProfile}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}


