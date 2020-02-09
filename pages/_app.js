import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import makeStore from  'store'
import { initUser } from 'store/actions/user'

import 'assets/reset.scss'

class _App extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, isServer: !!ctx.req }) : {})
            }
        }
    }

    componentDidMount () {
        this.props.store.dispatch(initUser())
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(makeStore)(_App)
