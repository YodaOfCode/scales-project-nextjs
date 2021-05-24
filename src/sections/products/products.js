/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Container, Grid} from 'theme-ui';
import SectionHeader from 'components/section-header/section-header';
import ProductCard from 'components/product-card/product-card.js';

import {data} from './data';
import {styles} from './styles';

export default function Products() {
    return (
        <section sx={{variant: 'section.products'}} id='products'>
            <Container>
                <SectionHeader
                    slogan='Ваги в наявності'
                    title='Ваги, які ми рекомендуємо для використання'
                />
                <Grid sx={styles.grid}>
                    {data.map((item) => (
                        <ProductCard
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            text={item.text}
                        >
                        </ProductCard>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

