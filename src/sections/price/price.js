/** @jsx jsx */
import {jsx, Container, Box} from 'theme-ui';
import React, {useState} from 'react';
import PriceCard from 'components/price-card/price-card';
import SectionHeader from 'components/section-header/section-header';

import {packages} from "./data";
import {styles} from "./styles";

export default function Price() {
    const {daily} = packages;
    const [state] = useState({
        active: 'daily',
        pricingPlan: daily,
    })

    return (
        <section id='pricing' sx={{variant: 'section.pricing'}}>
            <Container>
                <SectionHeader
                    slogan='Ціна та терміни прокату'
                    title='Детально ознайомтесь з цінами та умовами прокату вагів'
                />
                <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
                    {state.pricingPlan.map((packageData) => (
                        <Box sx={styles.pricingItem} key={packageData.id}>
                            <PriceCard
                                data={packageData}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </section>
    );
}



