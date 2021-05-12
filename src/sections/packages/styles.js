import React from "react";
import {keyframes} from "@emotion/core";
import ButtonGroup from "../../components/button-group";


export const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        draggable: false,
    },
    tablet: {
        breakpoint: {max: 1023, min: 640},
        items: 2,
        draggable: true,
    },
    mobile: {
        breakpoint: {max: 639, min: 0},
        items: 1,
        draggable: true,
    },
};

export const sliderParams = {
    additionalTransform: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup/>,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
};

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`, fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }`;

export const styles = {
    pricingWrapper: {
        mb: '-40px',
        mt: '-40px',
        mx: -3,
        display: 'flex',
        flexWrap: 'wrap',
        '&.pricing__wrapper .package__card': {
            '.package__header': {
                animation: `${fadeIn} 0.8s ease-in`,
            },
            'ul > li': {
                animation: `${fadeIn2} 0.7s ease-in`,
            },
            '.package__price': {
                animation: `${fadeIn2} 0.9s ease-in`,
            },
            button: {
                animation: `${fadeIn2} 1s ease-in`,
            },
        },
        '.carousel-container': {
            width: '100%',
            '> ul > li ': {
                display: 'flex',
            },
        },
        '.button__group': {
            display: ['flex', null, null, null, 'none'],
            mb: [4, null, null, null, 0],
        },
    },
    pricingItem: {
        mx: 3,
        display: 'flex',
        flexShrink: 0,
        flex: '1 1 auto',
    },
    buttonGroup: {
        justifyContent: 'center',
        mb: '7',
        mt: ['-15px', '-35px'],
        position: 'relative',
        zIndex: 2,
    },
    buttonGroupInner: {
        display: 'flex',
        padding: '7px',
        margin: '0 auto',
        borderRadius: '5px',
        backgroundColor: '#F7F8FB',
        button: {
            border: 0,
            padding: ['15px 20px', '15px 27px'],
            borderRadius: '5px',
            color: 'text',
            fontSize: [1, 2],
            lineHeight: 1.2,
            fontWeight: 500,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontFamily: 'body',
            letterSpacing: '-0.24px',
            transition: 'all 0.3s',
            '&.active': {
                color: '#0f2137',
                backgroundColor: '#ffffff',
                boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
            },
            '&:focus': {
                outline: 0,
            },
        },
    },
};

