import Link from 'next/link'
import { Component } from 'react'
import { connect } from 'react-redux'
import localStore from 'utils/localStore'

import layoutStyle from 'assets/layout.scss'
import baseStyle from 'assets/base.scss'
import style from './header.scss'

class Header extends Component {

    constructor (props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    render () {
        return (
            <div className={style.wrapper}>
                <div className={[style.container, layoutStyle.container].join(' ')}>
                    <div className={[style.logo, baseStyle.vertical_middle].join(' ')}><span>大亨</span></div>
                    {
                        this.props.name
                        ? <div className={[style.user_info, baseStyle.vertical_middle].join(' ')}>
                            <Link href="/writing">
                                <button className={style.write_button}>写文章</button>
                            </Link>
                            <img src={this.props.avatar} alt={this.props.name} className={style.avatar}/>
                            <span className={style.name}>{this.props.name}</span>
                            <span onClick={this.logout} className={style.logout}>退出</span>
                        </div>
                        : <div className={[style.sign_in, baseStyle.vertical_middle].join(' ')}>
                            <a href={`http://passport.dahengzhang.show`}>登录</a>
                        </div>
                    }
                    <div className={[style.navs, layoutStyle.content].join(' ')}>
                        <Link href="/">
                            <div className={[style.nav_item, baseStyle.vertical_middle].join(' ')}>
                                <span>首页</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    logout () {
        localStore.removeItem('user')
        localStore.removeItem('token')
        window.location.reload()
    }
}

const mapStateToProps = state => {
    return {
        name: state.user.name,
        avatar: state.user.avatar
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
