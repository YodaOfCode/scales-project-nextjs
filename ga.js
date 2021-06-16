window.gtag = function (config, NEXT_PUBLIC_GOOGLE_ANALYTICS, param3) {
    
}

export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}
