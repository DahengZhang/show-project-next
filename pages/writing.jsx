import { Component, Fragment } from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
import ajax from 'plugins/ajax'

import Header from 'components/header/index.jsx'

import markdownStyle from 'assets/markdown.scss'
import layoutStyle from 'assets/layout.scss'
import baseStyle from 'assets/base.scss'
import style from './writing.scss'

export default class Writing extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            content: '# 哈咯'
        }
        this.bundleTextareaChange = this.bundleTextareaChange.bind(this)
        this.publishArticle = this.publishArticle.bind(this)
    }

    componentDidMount () {
        this.previewEl.innerHTML = md.render(this.state.content)
    }

    render () {
        return (
            <Fragment>
                <Header />
                <div className={[layoutStyle.content, style.wrapper].join(' ')}>
                    <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} className={style.title} placeholder="文章标题" type="text"/>
                    <div className={[style.toolBar, baseStyle.vertical_middle].join(' ')}>
                        <button className={style.publish}>保存</button>
                        <button onClick={this.publishArticle} className={style.publish}>发布</button>
                    </div>
                    <div className={style.content}>
                        <textarea value={this.state.content} onChange={this.bundleTextareaChange} className={style.editor}></textarea>
                        <div ref={ref => this.previewEl = ref} className={[style.preview, markdownStyle['markdown-body']].join(' ')}></div>
                    </div>
                </div>
            </Fragment>
        )
    }

    async publishArticle () {
        try {
            await ajax.post('/article', {
                title: this.state.title,
                content: btoa(encodeURIComponent(this.state.content))
            })
        } catch (error) {
            console.log(error)
        }
    }

    bundleTextareaChange (e) {
        const value = e.target.value
        this.setState(() => ({
            content: value
        }), () => {
            this.previewEl.innerHTML = md.render(this.state.content)
        })
    }
}
