/** @jsx jsx */
import {jsx, Box, Card, Text, Heading, Button} from 'theme-ui';
import React from 'react';
import List from '../list/list';
import {styles} from './styles';

export default function PriceCard({
                                      data: {
                                          header,
                                          name,
                                          description,
                                          priceWithUnit,
                                          buttonText = 'Start Free Trial',
                                          anotherOption,
                                          points,
                                      },
                                  }) {
    return (
        <Card
            className={header ? 'package__card active' : 'package__card'}
            sx={styles.pricingBox}
        >
            {header && <Text sx={styles.header}>{header}</Text>}
            <Box>
                <Box className='package__header' sx={styles.pricingHeader}>
                    <Heading className='package__name' variant='title'>
                        {name}
                    </Heading>
                    <Text as='p'>
                        {description}
                    </Text>
                    <List items={points} childStyle={styles.listItem}/>
                    <Text className='package__price' sx={styles.price}>
                        {priceWithUnit}
                        <span>/ Місяць</span>
                    </Text>
                    <Box sx={styles.buttonGroup}>
                        <a href="tel:+380935386595">
                            <Button variant='primary' aria-label={buttonText}>
                                {buttonText}
                            </Button>
                        </a>
                        {anotherOption && (
                            <Button
                                variant='textButton'
                                className='free__trial'
                                aria-label={anotherOption}
                                sx={{color: 'black'}}
                            >
                                {anotherOption}
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}


