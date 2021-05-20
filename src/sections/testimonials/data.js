import React from "react";
import Avatar1 from "../../assets/testimonial/avatar1.png";
import Avatar2 from "../../assets/testimonial/avatar2.png";
import Avatar4 from "../../assets/testimonial/avatar4.png";
import ButtonGroup from "../../components/button-group";


export const data = [
    {
        id: 1,
        title: 'Отличный сервис, больше таких в Черкассах не встречал',
        description:
            'Брал напрокат весы для ребенка на этом сайте. Связался с менеджером, все обсудили и через час весы уже были под моим подъездом. Рекомендую.',
        avatar: Avatar2,
        name: 'Александр Способ',
        review: 5,
    },
    {
        id: 2,
        title: 'Бесплатная доставка - это всегда плюс',
        description:
            '4 месяца назад взяла в аренду весы и теперь пора возвращать. Совершенно не нужно было никуда ехать. Сервис отличный и главное с бесплатной доставкой.',
        avatar: Avatar1,
        name: 'Татьяна Нечепурная',
        review: 5,
    },
    // {
    //     id: 3,
    //     title: 'Непогано заощадив',
    //     description:
    //         'Все чудово, брав ваги на деякий час для дитини. Навіть не знав, що існують такі сервіси. Тепер частіше буду користуватись послугами прокату.',
    //     avatar: Avatar3,
    //     name: 'Катерина Сухарєва',
    //     review: 5,
    // },
    {
        id: 4,
        title: 'Дешево і швидко',
        description:
            'Все чудово, брав ваги на деякий час для дитини. Навіть не знав, що існують такі сервіси. Тепер частіше буду користуватись послугами прокату.',
        avatar: Avatar4,
        name: 'Олексій Струнін',
        review: 5,
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
    minimumTouchDrag: 50,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
}