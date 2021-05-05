/** @jsx jsx */
import {jsx, Container, Box, Flex} from 'theme-ui';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';

import {packages} from "./data";
import {styles, sliderParams} from "./styles";

export default function Package() {
    const {monthly, annual} = packages;
    const [state, setState] = useState({
        active: 'monthly',
        pricingPlan: monthly,
    })

    const handlePricingPlan = (plan) => {
        if (plan === 'annual') {
            setState({
                active: 'annual',
                pricingPlan: annual,
            })
        } else {
            setState({
                active: 'monthly',
                pricingPlan: monthly,
            })
        }
    }

    return (
        <section id='pricing' sx={{variant: 'section.pricing'}}>
            <Container>
                <SectionHeader
                    slogan='Pricing'
                    title='Choose your pricing plan'
                />

                <Flex sx={styles.buttonGroup}>
                    <Box sx={styles.buttonGroupInner}>
                        <button
                            className={state.active === 'monthly' ? 'active' : ''}
                            type='button'
                            aria-label='Monthly'
                            onClick={() => handlePricingPlan('monthly')}
                        >
                            Monthly Plan
                        </button>
                        <button
                            className={state.active === 'annual' ? 'active' : ''}
                            type='button'
                            aria-label='Annual'
                            onClick={() => handlePricingPlan('annual')}
                        >
                            Annual Plan
                        </button>
                    </Box>
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



