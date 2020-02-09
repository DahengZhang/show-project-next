import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main/>
                    <NextScript />
                    <style jsx global>{`
                    #__next {
                        height: 100%;
                    }
                    `}</style>
                </body>
            </Html>
        )
    }
}

export default _Document
