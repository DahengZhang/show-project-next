import Link from 'next/link'
import { Fragment } from 'react'
import Header from 'components/header/index.jsx'
import ajax from 'plugins/ajax'

import style from './index.scss'

const Main = ({ articles }) => {
    return (
        <Fragment>
            <Header />
            <div className={style.wrapper}>
                {
                    articles.map(item => {
                        return <Link href={`/article/${item._id}`}>
                            <a key={item._id}>{item.title}</a>
                        </Link>
                    })
                }
            </div>
        </Fragment>
    )
}

Main.getInitialProps = async () => {
    const { data } = await ajax.get('/article')
    return {
        articles: data
    }
}

export default Main
