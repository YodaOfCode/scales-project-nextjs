import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document';

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="uk-UK">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CNNMFBRGZ2"/>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', 'G-CNNMFBRGZ2');
                    </script>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
