import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io";

export const packages = {
    daily: [
        {
            id: 1,
            name: '1 Доба = 10 гривень',
            description: 'Особливості пакету:',
            buttonText: 'Замовити',
            priceWithUnit: '300',
            header: 'Найвигідніша пропозиція',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle/>,
                    text: "Заставний платіж 500 гривень",
                    isAvailable: true,
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Ваги Momert 6475' + ' або ' + 'ваги Momert 6425',
                    isAvailable: true,
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Безкоштовна доставка',
                    isAvailable: true,
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Необмежений термін користування',
                    isAvailable: true,
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle/>,
                    text: 'Нові батарейки у вагах',
                    isAvailable: true,
                },
            ],
        },
    ],
};
