import React from "react";
import Avatar1 from "../../assets/testimonial/avatar1.png";
import Avatar2 from "../../assets/testimonial/avatar2.png";
import Avatar3 from "../../assets/testimonial/avatar3.png";
import Avatar4 from "../../assets/testimonial/avatar4.png";
import ButtonGroup from "../../components/button-group";


export const data = [
    {
        id: 1,
        title: 'Modern look & trending design',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar1,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
    },
    {
        id: 2,
        title: 'Design Quality & performance',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar2,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
    },
    {
        id: 3,
        title: 'Layout and organized layers',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar3,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
    },
    {
        id: 4,
        title: 'Modern look & trending design',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar4,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
    },
];

export const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1619},
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: {max: 1619, min: 1024},
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 640},
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 639, min: 0},
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

export const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup/>,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
}