import React from 'react'
import {IoIosCheckmarkCircle, IoIosCloseCircle} from "react-icons/io";

export const packages = {
    monthly: [
        {
            id: 1,
            name: '1 Тиждень',
            description: 'Особливості пакету:',
            buttonText: 'Замовити',
            priceWithUnit: '105',
            anotherOption: 'Вартість прокату буде утримуватися із суми заставного платежу',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle/>,
                    text: '7 днів користування',
                    isAvailable: true,
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle/>,
                    text: "Заставний платіж 500 гривень",
                    isAvailable: true,
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Ваги \'Momert 6475\'',
                    isAvailable: true,
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Безкоштовна доставка',
                    isAvailable: true,
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Сума за 7 днів 105 гривень',
                    isAvailable: true,
                },
            ],
        },
        {
            id: 2,
            name: '2 Тижні',
            description: 'Особливості пакету:',
            priceWithUnit: '90',
            buttonText: 'Замовити',
            anotherOption: 'Вартість прокату буде утримуватися із суми заставного платежу',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle/>,
                    text: '14 днів користування',
                    isAvailable: true,
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle/>,
                    text: "Заставний платіж 500 гривень",
                    isAvailable: true,
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Ваги \'Momert 6475\'',
                    isAvailable: true,
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Безкоштовна доставка',
                    isAvailable: true,
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Сума за 14 днів 180 гривень',
                    isAvailable: true,
                },
            ],
        },
        {
            id: 3,
            header: 'Зазвичай обирають',
            headerIcon: <IoIosCheckmarkCircle/>,
            name: '3 Тижні',
            description: 'Особливості пакету:',
            priceWithUnit: '80',
            buttonText: 'Замовити',
            anotherOption: 'Вартість прокату буде утримуватися із суми заставного платежу',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle/>,
                    text: '21 день користування',
                    isAvailable: true,
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle/>,
                    text: "Заставний платіж 500 гривень",
                    isAvailable: true,
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Ваги \'Momert 6475\'',
                    isAvailable: true,
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Безкоштовна доставка',
                    isAvailable: true,
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Сума за 21 день 240 гривень',
                    isAvailable: true,
                },
            ],
        },
    ],
    annual: [
        {
            id: 1,
            name: 'Від 3 тижнів',
            description: 'Особливості пакету:',
            buttonText: 'Замовити',
            priceWithUnit: '70',
            header: 'Найвигідніша пропозиція',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle/>,
                    text: "Сума 10 гривень з 22 дня користування",
                    isAvailable: true,
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Заставний платіж 500 гривень',
                    isAvailable: true,
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Ваги \'Momert 6475\'',
                    isAvailable: true,
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Безкоштовна доставка',
                    isAvailable: true,
                },
            ],
        },
    ],
};
