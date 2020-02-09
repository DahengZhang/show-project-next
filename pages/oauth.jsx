import Router from 'next/router'
import { Component, Fragment } from 'react'
import axios from 'axios'
import localStore from 'utils/localStore'

export default class Oauth extends Component {
    constructor (props) {
        super(props)
        this.state = {
            status: '',
            msg: ''
        }
    }
    async componentDidMount () {
        alert('ssss')
        // try {
        //     this.setState({
        //         msg: '正在获取用户信息'
        //     })
        //     const { data } = await axios.get('http://passport.dahengzhang.show/login', {
        //         params: {
        //             code: Router.query.code
        //         }
        //     })
        //     this.setState({
        //         status: '登录成功正在等待跳转...'
        //     })
        //     localStore.setItem('token', data.token)
        //     delete data.token
        //     localStore.setItem('user', data)
        //     // window.open(Router.query.s_url || '/', '_self')
        // } catch (error) {
        //     this.setState({
        //         status: '失败',
        //         msg: error.toString()
        //     })
        //     console.log('登录失败')
        // }
    }
    render () {
        return (
            <Fragment>
                <h1>{ !this.state.status ? 'waiting' : this.state.status }</h1>
                <p>{this.state.msg}</p>
            </Fragment>
        )
    }
}
