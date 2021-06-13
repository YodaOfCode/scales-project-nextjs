import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document';

import ReactGA from 'react-ga';
ReactGA.initialize('G-CNNMFBRGZ2');
ReactGA.pageview(window.location.pathname + window.location.search);

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="uk-UK">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
