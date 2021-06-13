import Time from "../../assets/services/smart.svg";
import Profitable from "../../assets/services/secure.svg";

export const data = {
    subTitle: 'Чому саме прокат?',
    title: 'Прокат - це зручно, швидко і вигідно',
    features: [
        {
            id: 1,
            imgSrc: Time,
            altText: 'Smart Features',
            title: 'Зручність',
            text:
                'Вам не треба витрачати час на пошуки і вибір вагів. Вам не треба нікуди їхати і шось шукати. ' +
                'Ми привеземо вам чудові, робочі дитячі ваги, які зазвичай використовуються у медичних закладах.',
        },
        {
            id: 2,
            imgSrc: Profitable,
            altText: 'Secure Contents',
            title: 'Вигідність',
            text:
                'Зазвичай, ваги потрібні не завжди, а тільки на деякий час, тому, коли ви берете їх напрокат, ви економите.' +
                ' Ви використовуєте ваги тільки стільки часу, скільки вам буде потрібно.',
        },
    ],
};
