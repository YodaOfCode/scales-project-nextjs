/** @jsx jsx */
import {jsx, Container, Box, Flex} from 'theme-ui';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';

import {packages} from "./data";
import {styles, sliderParams} from "./styles";

export default function Price() {
    const {daily, annual} = packages;
    const [state, setState] = useState({
        active: 'daily',
        pricingPlan: daily,
    })

    const handlePricingPlan = (plan) => {
        if (plan === 'annual') {
            setState({
                active: 'annual',
                pricingPlan: annual,
            })
        } else {
            setState({
                active: 'daily',
                pricingPlan: daily,
            })
        }
    }

    return (
        <section id='pricing' sx={{variant: 'section.pricing'}}>
            <Container>
                <SectionHeader
                    slogan='Ціна та терміни прокату'
                    title='Детально ознайомтесь з цінами та умовами прокату вагів'
                />

                <Flex sx={styles.buttonGroup}>
                    {/*<Box sx={styles.buttonGroupInner}>*/}
                    {/*    <button*/}
                    {/*        className={state.active === 'daily' ? 'active' : ''}*/}
                    {/*        type='button'*/}
                    {/*        aria-label='daily'*/}
                    {/*        onClick={() => handlePricingPlan('daily')}*/}
                    {/*    >*/}
                    {/*        Будь-який термін*/}
                    {/*    </button>*/}
                        {/*<button*/}
                        {/*    className={state.active === 'annual' ? 'active' : ''}*/}
                        {/*    type='button'*/}
                        {/*    aria-label='Annual'*/}
                        {/*    onClick={() => handlePricingPlan('annual')}*/}
                        {/*>*/}
                        {/*    Безлімітний термін*/}
                        {/*</button>*/}
                    {/*</Box>*/}
                </Flex>
                <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
                    <Carousel {...sliderParams}>
                        {state.pricingPlan.map((packageData, index) => (
                            <Box sx={styles.pricingItem} key={packageData.id}>
                                <PriceCard
                                    data={packageData}
                                />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Container>
        </section>
    );
}



