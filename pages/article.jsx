import { Fragment } from 'react'
import Header from 'components/header/index.jsx'
import ajax from 'plugins/ajax'
import formatApiUrl from 'utils/formatApiUrl'
import moment from 'moment'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import markdownStyle from 'assets/markdown.scss'
import layoutStyle from 'assets/layout.scss'
import baseStyle from 'assets/base.scss'
import style from './article.scss'

const Article = ({ article }) => {
    return (
        <Fragment>
            <Header />
            <div className={[style.wrapper, layoutStyle.content].join(' ')}>
                <div className={style.title}>
                    <h1 className={style.article_title}>{article.title}</h1>
                    <span className={style.article_time}>{moment(article.editorTime).fromNow()}</span>
                </div>
                <div className={[style.author, baseStyle.vertical_middle].join(' ')}>
                    <img className={style.avatar} src={article.author.avatar} alt={article.author.name} />
                    <span className={style.name}>{article.author.name}</span>
                </div>
                <div className={[style.content, markdownStyle['markdown-body']].join(' ')} dangerouslySetInnerHTML={{__html: md.render(decodeURIComponent(atob(article.content)))}}>
                </div>
            </div>
        </Fragment>
    )
}

Article.getInitialProps = async ({ query }) => {
    const { data } = await ajax.get(formatApiUrl('/article/{id}', { id: query.id }))
    return {
        article: data
    }
}

export default Article
